import * as THREE from 'three';
import { Input } from './core/input.js';
import { AudioSystem } from './core/audio.js';
import { ThirdPersonCamera } from './core/camera.js';
import { loadProfile, saveProfile, resetProfile } from './core/save.js';
import { SKIN_COLORS, CLOTH_COLORS, HAIR_COLORS, CATEGORIES, GEAR, findItem } from './core/catalog.js';
import { World } from './world/world.js';
import { Obby } from './obby/obby.js';
import { Player } from './entities/player.js';
import { spawnNPCs } from './entities/npc.js';
import { Coins } from './systems/coins.js';
import { Effects } from './systems/effects.js';
import { Progression, XP } from './systems/progression.js';
import { UI, formatTime } from './ui/ui.js';
import { ThumbnailRenderer } from './ui/thumbnails.js';
import { TouchControls } from './ui/touch.js';

const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export class Game {
  async init() {
    this.profile = loadProfile();
    this.progression = new Progression(this.profile, () => this.saveProfile());
    this.audio = new AudioSystem();
    this.ui = new UI(this);
    this.state = 'loading';
    this.paused = false;

    // ---- renderer
    const canvas = document.getElementById('game');
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1200);
    this.input = new Input(canvas);
    this.touch = new TouchControls(this.input);
    this.input.onTouchDetected = () => this.enableTouchMode();
    if (window.matchMedia?.('(pointer: coarse)').matches) this.enableTouchMode(true);
    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.ui.setLoading(0.1, 'Planting trees…');
    // wait (briefly) for web fonts so signs render with the right typeface
    if (document.fonts?.ready) await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]);
    await nextFrame();
    this.world = new World(this.scene, this.renderer);
    this.ui.setLoading(0.45, 'Building the Sky Obby…');
    await nextFrame();
    this.obby = new Obby(this.scene, this.world);
    this.ui.setLoading(0.6, 'Waking up the villagers…');
    await nextFrame();
    this.player = new Player(this.scene, this.world.col, this.profile.avatar);
    this.player.setGear(this.progression.owns('gear', this.profile.gear) ? this.profile.gear : null);
    this.npcs = spawnNPCs(this.scene, this.world.col, this.world.npcSpots);
    this.coins = new Coins(this.scene, [...this.world.coinSpots, ...this.obby.coinSpots]);
    this.effects = new Effects(this.scene);
    this.cam = new ThirdPersonCamera(this.camera, this.world.col);
    // soft 'studio' key light that only switches on in the avatar editor
    this.studio = new THREE.DirectionalLight('#ffffff', 0);
    this.scene.add(this.studio, this.studio.target);
    this.ui.setLoading(0.8, 'Polishing avatars…');
    await nextFrame();
    this.thumbs = new ThumbnailRenderer();

    // pressing Esc while playing releases the mouse; treat that as pause
    this.input.onLockChange = (locked) => {
      if (!locked && this.state === 'play' && !this.paused && !this.ui.isModalOpen()) this.togglePause(true);
    };
    this.wirePlayerEvents();
    this.wireObbyEvents();
    this.applySettings();
    this.player.teleport(this.world.spawnPoint, Math.PI);
    this.cam.snap(this.player.head);

    // warm up shaders so the first frame of play doesn't hitch
    this.renderer.compile(this.scene, this.camera);
    this.ui.setLoading(1, 'Ready!');
    await nextFrame();

    const unlock = () => { this.audio.unlock(); this.audio.startMusic(); };
    // iOS only unlocks audio on certain events, so listen to all of them
    for (const ev of ['pointerdown', 'keydown', 'touchend', 'click']) window.addEventListener(ev, unlock);

    this.clock = new THREE.Clock();
    this.elapsed = 0;
    this.areaTimer = 0;
    this.currentArea = null;
    this.saveTimer = 0;
    this.fpsFrames = 0; this.fpsTime = 0;
    this.deadTimer = 0;
    this.toMenu(true);
    this.ui.hideLoading();
    this.renderer.setAnimationLoop(() => this.frame());
  }

  // ---------------- settings / profile ----------------
  saveProfile() { saveProfile(this.profile); }

  applySettings() {
    const s = this.profile.settings;
    this.audio.setMusicVolume(s.musicVolume);
    this.audio.setSfxVolume(s.sfxVolume);
    this.camera.fov = s.fov; this.camera.updateProjectionMatrix();
    if (this.cam) { this.cam.sensitivity = s.sensitivity; this.cam.invertY = s.invertY; }
    const pr = { low: 0.7, medium: 1, high: Math.min(window.devicePixelRatio || 1, 2) }[s.quality] ?? 1;
    this.renderer.setPixelRatio(pr);
    this.resize();
    const sh = !!s.shadows;
    if (this.renderer.shadowMap.enabled !== sh) {
      this.renderer.shadowMap.enabled = sh;
      this.scene.traverse((o) => { if (o.material) { (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.needsUpdate = true; }); } });
    }
    if (this.world) {
      const size = s.quality === 'high' ? 2048 : 1024;
      if (this.world.sun.shadow.mapSize.x !== size) {
        this.world.sun.shadow.mapSize.set(size, size);
        this.world.sun.shadow.map?.dispose(); this.world.sun.shadow.map = null;
      }
    }
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  resetProgress() {
    this.profile = resetProfile();
    this.progression.p = this.profile;
    this.saveProfile();
    this.applyAvatar(this.profile.avatar);
    this.player.setGear(null);
    this.applySettings();
    this.ui.closeModals();
    this.ui.refreshProfile();
    this.ui.toast('Progress reset. Fresh start!', { icon: '🧹' });
  }

  applyAvatar(cfg) {
    this.player.avatar.setConfig(cfg);
    this.ui.refreshProfile();
  }

  // ---------------- state changes ----------------
  toMenu(first = false) {
    this.state = 'menu';
    this.paused = false;
    this.ui.closeModals();
    this.ui.showHud(false);
    this.ui.showCustomize(false);
    this.ui.showMenu(true);
    this.ui.setTimer(false);
    if (this.obby.state === 'running') this.obby.cancel();
    this.player.teleport(this.world.spawnPoint, Math.PI * 0.15);
    this.menuAngle = 0.4;
    if (!first) this.saveProfile();
  }

  // Phones / tablets: on-screen controls, no mouse lock, lighter graphics.
  enableTouchMode(atStartup = false) {
    this.input.touchMode = true;
    document.body.classList.add('touch');
    this.touch.enable(true);
    this.input.unlock();
    // first time on a touch device: pick graphics settings a phone can handle
    if (this.profile && !this.profile.settings.touchTuned) {
      this.profile.settings.touchTuned = true;
      this.profile.settings.quality = 'medium';
      if (!atStartup && this.renderer) this.applySettings();
      this.saveProfile();
    }
  }

  play() {
    this.audio.unlock(); this.audio.startMusic();
    if (this.input.touchMode) {
      // go fullscreen and landscape where the browser allows it (Android); ignored elsewhere
      try { document.documentElement.requestFullscreen?.({ navigationUI: 'hide' })?.then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {}); } catch { /* not supported */ }
    }
    this.state = 'play';
    this.ui.showMenu(false);
    this.ui.showHud(true);
    this.ui.refreshHud();
    this.player.teleport(this.world.spawnPoint, Math.PI);
    this.cam.yaw = 0; this.cam.pitch = 0.3;
    this.cam.snap(this.player.head);
    this.currentArea = null;
    this.ui.toast(this.input.touchMode ? 'Welcome to Blockverse! Walk up to villagers and tap 💬 to chat.' : 'Welcome to Blockverse! Talk to the villagers with E.', { icon: '👋', cls: 'blue' });
  }

  wantsLock() {
    return this.state === 'play' && !this.paused && !this.ui.isModalOpen() && this.input.lockSupported;
  }

  togglePause(on) {
    if (this.state !== 'play') return;
    this.paused = on ?? !this.paused;
    this.ui.modal('pause', this.paused);
    if (this.paused) this.ui.modal('inventory', false);
  }

  openCustomize() {
    if (this.state === 'customize') return;
    this.prevState = this.state === 'menu' ? 'menu' : 'play';
    this.ui.closeModals();
    this.paused = false;
    this.state = 'customize';
    this.draft = { ...this.profile.avatar };
    this.ui.showMenu(false);
    this.ui.showHud(false);
    this.ui.showCustomize(true);
    // frame the avatar on the left, leaving room for the panel on the right
    const yaw = this.cam.yaw;
    this.custYaw = yaw;
    this.player.yaw = yaw;
    this.player.vel.set(0, 0, 0);
    this.custSpin = 0;
  }

  closeCustomize(save) {
    if (save) {
      const removed = [];
      for (const cat of Object.keys(CATEGORIES)) {
        if (!this.progression.owns(cat, this.draft[cat])) { removed.push(findItem(cat, this.draft[cat]).name); this.draft[cat] = this.profile.avatar[cat]; }
      }
      this.profile.avatar = { ...this.draft };
      this.saveProfile();
      this.audio.play('equip');
      if (removed.length) this.ui.toast(`Not owned, not saved: ${removed.join(', ')}`, { icon: '🔒' });
      else this.ui.toast('Avatar saved! Looking good.', { icon: '✨', cls: 'blue' });
    }
    this.player.avatar.setConfig(this.profile.avatar);
    this.ui.showCustomize(false);
    if (this.prevState === 'menu') { this.state = 'menu'; this.ui.showMenu(true); }
    else { this.state = 'play'; this.ui.showHud(true); this.ui.refreshHud(); }
    this.ui.refreshProfile();
  }

  updateDraft() { this.player.avatar.setConfig(this.draft); }

  selectItem(cat, id) {
    const prog = this.progression;
    const item = findItem(cat, id);
    if (cat === 'gear') {
      if (prog.owns('gear', id)) { this.toggleGear(id); this.ui.renderCustomize(); return; }
      this.offerPurchase(cat, item);
      return;
    }
    this.draft[cat] = id;
    this.updateDraft();
    this.ui.renderCustomize();
    if (!prog.owns(cat, id)) this.offerPurchase(cat, item);
  }

  offerPurchase(cat, item) {
    const chk = this.progression.canBuy(cat, item.id);
    if (!chk.ok) { this.audio.play('error'); this.ui.toast(`${item.name}: ${chk.why}`, { icon: '🔒' }); return; }
    this.ui.confirm(`Buy ${item.name}?`, `This costs ${item.price} coins. You have ${this.profile.coins}.`, () => {
      const r = this.progression.buy(cat, item.id);
      if (r.ok) {
        this.audio.play('buy');
        this.ui.toast(`You bought ${item.name}!`, { icon: '🛍️', cls: 'gold' });
        if (cat === 'gear') this.toggleGear(item.id, true);
      }
      this.ui.renderCustomize();
      this.ui.refreshHud();
    }, { yes: '🪙 Buy', danger: false });
  }

  randomizeDraft() {
    const d = this.draft;
    d.skin = pick(SKIN_COLORS); d.shirt = pick(CLOTH_COLORS); d.pants = pick(CLOTH_COLORS); d.hairColor = pick(HAIR_COLORS);
    for (const cat of Object.keys(CATEGORIES)) {
      const owned = CATEGORIES[cat].filter((i) => this.progression.owns(cat, i.id));
      d[cat] = pick(owned).id;
    }
    this.updateDraft();
    this.ui.renderCustomize();
  }

  toggleGear(id, forceOn = false) {
    if (!this.progression.owns('gear', id)) {
      const g = GEAR.find((x) => x.id === id);
      this.audio.play('error');
      this.ui.toast(`${g.name} is locked. Buy it in the Avatar Shop (Lv ${g.level}).`, { icon: '🔒' });
      return;
    }
    this.profile.gear = this.profile.gear === id && !forceOn ? null : id;
    this.player.setGear(this.profile.gear);
    this.audio.play('equip');
    this.saveProfile();
    this.ui.refreshHud();
  }

  // ---------------- gameplay events ----------------
  wirePlayerEvents() {
    const p = this.player;
    p.on('jump', () => this.audio.play('jump'));
    p.on('land', (vy) => { this.audio.play('land'); if (vy < -25) this.effects.burst(p.pos.clone(), { count: 8, colors: ['#ffffff', '#dddddd'], speed: 4, up: 1, life: 0.4, size: 0.18 }); });
    p.on('step', () => this.audio.play('step'));
    p.on('fall', () => this.killPlayer('fall'));
    p.on('touch', (c) => {
      if (this.state !== 'play' || this.deadTimer > 0) return;
      if (c.type === 'lava' || c.data?.lava) return this.killPlayer('lava');
      const d = c.data || {};
      if (d.checkpoint !== undefined && this.obby.reachCheckpoint(d.checkpoint)) {
        this.audio.play('checkpoint');
        this.effects.burst(this.obby.checkpoints[d.checkpoint].pos.clone().add(new THREE.Vector3(0, 1, 0)), { count: 30, colors: ['#43a047', '#a5d6a7', '#ffffff'], speed: 6, up: 6 });
        this.ui.toast(`Checkpoint ${d.checkpoint} reached!`, { icon: '🚩', cls: 'blue' });
        this.progression.addXP(XP.checkpoint);
      }
      if (d.finish) this.finishObby();
      if (d.portal) this.teleportTo(this.world.spawnPoint, 0);
    });
  }

  wireObbyEvents() {
    this.obby.onStart = () => this.ui.toast('Timer started — GO GO GO!', { icon: '⏱️' });
    this.obby.onCancel = () => this.ui.setTimer(false);
    this.obby.onHit = () => { if (!this.hitCooldown || this.elapsed > this.hitCooldown) { this.audio.play('land'); this.audio.play('death'); this.hitCooldown = this.elapsed + 0.6; } };
    this.obby.onVanish = () => this.audio.play('vanish');
  }

  finishObby() {
    const t = this.obby.finish();
    if (t == null) return;
    const p = this.profile;
    const isNew = p.bestTime == null || t < p.bestTime;
    if (isNew) p.bestTime = t;
    p.stats.obbyCompletions++;
    const coinReward = 30 + (isNew ? 20 : 0);
    this.progression.addCoins(coinReward);
    const lv = this.progression.addXP(XP.obby + (isNew ? XP.obbyBest : 0));
    this.audio.play('finish');
    const fp = this.obby.finishPos.clone().add(new THREE.Vector3(0, 2, 0));
    const conf = ['#ff4d5e', '#ffb020', '#36d07a', '#2f9bff', '#a96bff', '#ff6fb5'];
    for (let i = 0; i < 3; i++) setTimeout(() => this.effects.burst(fp, { count: 70, colors: conf, speed: 9, up: 10, gravity: 9, life: 2.2, size: 0.28 }), i * 250);
    this.ui.setTimer(false);
    const rewards = [`🪙 +${coinReward} coins`, `⭐ +${XP.obby + (isNew ? XP.obbyBest : 0)} XP`];
    if (lv) rewards.push(`🎉 Level ${p.level}!`);
    setTimeout(() => this.ui.showFinish(t, p.bestTime, isNew, rewards), 700);
    this.obby.resetCheckpoints();
    this.ui.refreshHud(true);
  }

  restartObby() {
    this.obby.cancel();
    this.teleportTo(this.obby.checkpoints[0].pos, -Math.PI / 2);
  }

  teleportTo(pos, camYaw) {
    this.ui.fade(true);
    this.player.frozen = true;
    setTimeout(() => {
      this.player.teleport(pos, camYaw + Math.PI);
      this.cam.yaw = camYaw;
      this.cam.snap(this.player.head);
      this.player.frozen = false;
      this.ui.fade(false);
    }, 260);
  }

  killPlayer(reason) {
    if (this.deadTimer > 0) return;
    const p = this.player;
    this.deadTimer = 1.0;
    p.frozen = true;
    p.vel.set(0, 0, 0);
    this.profile.stats.deaths++;
    this.audio.play(reason === 'lava' ? 'lava' : 'death');
    const at = p.pos.clone().add(new THREE.Vector3(0, 1.3, 0));
    const c = this.profile.avatar;
    if (reason !== 'fall') this.effects.burst(at, { count: 40, colors: [c.shirt, c.pants, c.skin, reason === 'lava' ? '#ff6d00' : '#ffffff'], speed: 8, up: 7, life: 1.1, size: 0.35 });
    p.avatar.root.visible = false;
    this.respawnAt = this.obby.contains(p.pos) && this.obby.state === 'running' ? this.obby.respawnPoint() : this.obby.contains(p.pos) ? this.obby.checkpoints[0].pos.clone() : this.world.spawnPoint.clone();
    this.respawnYaw = this.obby.contains(p.pos) ? -Math.PI / 2 : this.cam.yaw;
  }

  respawn() {
    const p = this.player;
    p.teleport(this.respawnAt, this.respawnYaw + Math.PI);
    p.avatar.root.visible = true;
    p.frozen = false;
    this.cam.yaw = this.respawnYaw;
    this.cam.snap(p.head);
    this.effects.burst(p.pos.clone().add(new THREE.Vector3(0, 1, 0)), { count: 24, colors: ['#ffffff', '#bbdefb'], speed: 4, up: 3, life: 0.6 });
  }

  interact() {
    const npc = this.nearNpc;
    if (!npc) return;
    npc.talk(this.player.pos);
    this.audio.play('talk');
    this.ui.speak(npc, npc.nextLine());
    const met = this.profile.stats.npcsMet;
    if (!met.includes(npc.name)) {
      met.push(npc.name);
      const lv = this.progression.addXP(XP.npc);
      this.ui.toast(`New friend: ${npc.name}  (+${XP.npc} XP)`, { icon: '🤝', cls: 'blue' });
      if (lv) this.onLevelUp();
    }
    if (npc.def.action === 'shop') setTimeout(() => { if (this.state === 'play') { this.ui.custCat = 'hat'; this.openCustomize(); } }, 1600);
  }

  onLevelUp() {
    this.audio.play('levelup');
    this.ui.toast(`LEVEL UP! You are now level ${this.profile.level}`, { icon: '🎉', cls: 'gold' });
    this.effects.burst(this.player.head, { count: 50, colors: ['#ffd54f', '#fff59d', '#ffffff', '#4fc3f7'], speed: 6, up: 8, life: 1.4 });
    const unlocked = [];
    for (const cat of [...Object.keys(CATEGORIES), 'gear']) {
      const list = cat === 'gear' ? GEAR : CATEGORIES[cat];
      list.filter((i) => i.level === this.profile.level).forEach((i) => unlocked.push(i.name));
    }
    if (unlocked.length) setTimeout(() => this.ui.toast(`Unlocked in shop: ${unlocked.join(', ')}`, { icon: '🔓', cls: 'gold' }), 600);
  }

  // ---------------- main loop ----------------
  frame() {
    const dt = Math.min(this.clock.getDelta(), 1 / 20);
    this.elapsed += dt;
    const input = this.input;

    // global keys
    if (this.state === 'play') {
      // (an Escape that just released the mouse lock has already paused the game)
      if (input.wasPressed('Escape') && performance.now() - input.lastUnlock > 400) {
        if (!this.paused && this.ui.isModalOpen()) this.ui.closeModals();
        else if (this.paused && (this.ui.isOpen('settings') || this.ui.isOpen('confirm'))) { this.ui.modal('settings', false); this.ui.modal('confirm', false); }
        else this.togglePause();
      }
      if (!this.paused) {
        if (input.wasPressed('KeyI')) this.ui.toggleInventory();
        if (input.wasPressed('KeyC')) this.openCustomize();
        if (input.wasPressed('Digit1')) this.toggleGear('speed');
        if (input.wasPressed('Digit2')) this.toggleGear('gravity');
        if (input.wasPressed('KeyE')) this.interact();
      }
    } else if (this.state === 'customize' && input.wasPressed('Escape')) {
      if (this.ui.isModalOpen()) this.ui.closeModals(); else this.closeCustomize(false);
    } else if (this.state === 'menu' && input.wasPressed('Escape')) this.ui.closeModals();

    // mouse lock: hidden cursor + mouse-look whenever you're actually playing
    const wantLock = this.wantsLock();
    const activation = navigator.userActivation ? navigator.userActivation.isActive : true;
    if (wantLock && !input.locked && activation) input.lock();
    if (!wantLock && input.locked) input.unlock();
    this.ui.setLockHint(wantLock && !input.locked);

    const playing = this.state === 'play' && !this.paused;
    this.world.update(dt, this.elapsed);
    if (!this.paused) {
      this.obby.update(dt, this.player);
      for (const n of this.npcs) n.update(dt);
    }

    if (playing) {
      if (this.deadTimer > 0) {
        this.deadTimer -= dt;
        if (this.deadTimer <= 0.25 && !this.fadedForRespawn) { this.ui.fade(true); this.fadedForRespawn = true; }
        if (this.deadTimer <= 0) { this.respawn(); this.ui.fade(false); this.fadedForRespawn = false; }
      }
      this.player.update(dt, input, this.cam.yaw);
      this.cam.update(dt, input, this.player.head);
      this.coins.update(dt, this.player.pos, (c) => {
        this.audio.play('coin');
        this.effects.burst(c.pos, { count: 14, colors: ['#ffd54f', '#fff59d', '#ffffff'], speed: 4, up: 4, life: 0.6, size: 0.16 });
        this.profile.stats.coinsCollected++;
        this.progression.addCoins(1);
        const lv = this.progression.addXP(XP.coin);
        if (lv) this.onLevelUp();
        this.ui.refreshHud(true);
      });
      // nearest NPC for interaction prompt
      let best = null, bd = 4.8;
      for (const n of this.npcs) { const d = n.pos.distanceTo(this.player.pos); if (d < bd) { bd = d; best = n; } }
      this.nearNpc = best;
      this.ui.setPrompt(best && !this.ui.isModalOpen() ? `Talk to ${best.name}` : null);
      // obby timer
      const os = this.obby.state === 'running';
      this.ui.setTimer(os, this.obby.time, this.obby.currentCheckpoint, 3);
      // area banners
      this.areaTimer -= dt;
      if (this.areaTimer <= 0) {
        this.areaTimer = 0.5;
        const a = this.world.areaAt(this.player.pos.x, this.player.pos.z);
        if (a && a !== this.currentArea) this.ui.areaBanner(a.name);
        if (a) this.currentArea = a;
      }
      this.profile.stats.playSeconds += dt;
      this.saveTimer += dt;
      if (this.saveTimer > 10) { this.saveTimer = 0; this.saveProfile(); }
    } else if (this.state === 'menu') {
      // slow cinematic orbit around the plaza
      this.menuAngle += dt * 0.06;
      const p = this.player.pos;
      const cx = p.x - 2.5, cz = p.z - 2;
      this.camera.position.set(cx + Math.sin(this.menuAngle) * 13, p.y + 4.2, cz + Math.cos(this.menuAngle) * 13);
      this.camera.lookAt(cx - Math.cos(this.menuAngle) * 3.2, p.y + 2.2, cz + Math.sin(this.menuAngle) * 3.2);
      this.player.yaw += dt * 0.0; // stays still, facing the camera-ish
      this.player.update(dt, { isDown: () => false, wasPressed: () => false }, 0);
      this.coins.update(dt, new THREE.Vector3(1e5, 0, 0), () => {});
      this.input.consumeDrag(); this.input.consumeWheel();
    } else if (this.state === 'customize') {
      const [dx] = input.consumeDrag(); input.consumeWheel();
      this.custSpin = dx * 0.012;
      this.player.yaw += this.custSpin;
      this.player.update(dt, { isDown: () => false, wasPressed: () => false }, 0);
      const p = this.player.pos, y = this.custYaw;
      const fx = Math.sin(y), fz = Math.cos(y);           // from avatar towards camera
      const rx = Math.cos(y), rz = -Math.sin(y);          // screen right
      const narrow = window.innerWidth < 860 && window.innerHeight > window.innerWidth; // phone held upright
      const dist = narrow ? 8.5 : window.innerHeight < 520 ? 6 : 7.4;
      // centre the avatar in the space left of the editor panel, whatever the screen size
      let side = 0;
      if (!narrow) {
        const panel = document.querySelector('.cust-panel');
        const used = panel ? window.innerWidth - panel.getBoundingClientRect().left : 0;
        const freeCentre = (window.innerWidth - used) / 2 / window.innerWidth; // 0..0.5 of the screen
        const ndc = 1 - 2 * freeCentre;
        side = ndc * dist * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * this.camera.aspect;
      }
      const camPos = new THREE.Vector3(p.x + fx * dist + rx * side, p.y + (narrow ? 0.6 : 2.2), p.z + fz * dist + rz * side);
      this.camera.position.lerp(camPos, 1 - Math.exp(-8 * dt));
      const look = new THREE.Vector3(p.x + rx * side, p.y + (narrow ? -0.4 : 1.45), p.z + rz * side);
      this.camera.lookAt(look);
      this.studio.position.copy(this.camera.position).add(new THREE.Vector3(0, 3, 0));
      this.studio.target.position.copy(p).add(new THREE.Vector3(0, 1.5, 0));
      this.coins.update(dt, new THREE.Vector3(1e5, 0, 0), () => {});
    } else if (this.state === 'play' && this.paused) {
      this.input.consumeDrag(); this.input.consumeWheel();
    }

    // keep the avatar editor clean: no coins or villagers wandering into the shot
    const showWorldStuff = this.state !== 'customize';
    this.coins.rim.visible = this.coins.face.visible = showWorldStuff;
    for (const n of this.npcs) n.avatar.root.visible = showWorldStuff;
    this.studio.intensity += ((this.state === 'customize' ? 1.5 : 0) - this.studio.intensity) * (1 - Math.exp(-6 * dt));
    this.effects.update(dt);
    this.world.followShadow(this.player.pos);
    if (this.state !== 'customize') this.ui.updateLabels(this.camera, this.npcs, this.player.pos);
    else this.ui.updateLabels(this.camera, [], this.player.pos);
    this.renderer.render(this.scene, this.camera);

    // fps
    this.fpsFrames++; this.fpsTime += dt;
    if (this.fpsTime > 0.5) { this.ui.setFps(this.profile.settings.showFps && this.state === 'play', Math.round(this.fpsFrames / this.fpsTime)); this.fpsFrames = 0; this.fpsTime = 0; }
    input.endFrame();
  }
}

export { formatTime };
