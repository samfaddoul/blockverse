import * as THREE from 'three';
import { SKIN_COLORS, CLOTH_COLORS, HAIR_COLORS, FACES, HAIRS, HATS, ACCESSORIES, GEAR } from '../core/catalog.js';
import { xpToNext } from '../systems/progression.js';
import { NPC_DEFS } from '../entities/npc.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function formatTime(t) {
  if (t == null) return '—';
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${m}:${s.toFixed(2).padStart(5, '0')}`;
}

const CAT_INFO = {
  skin: { title: 'Skin Tone', colors: SKIN_COLORS, key: 'skin' },
  shirt: { title: 'Shirt Colour', colors: CLOTH_COLORS, key: 'shirt' },
  pants: { title: 'Pants Colour', colors: CLOTH_COLORS, key: 'pants' },
  face: { title: 'Faces', items: FACES, key: 'face' },
  hair: { title: 'Hair Styles', items: HAIRS, key: 'hair' },
  hat: { title: 'Hats', items: HATS, key: 'hat', view: 'head' },
  accessory: { title: 'Accessories', items: ACCESSORIES, key: 'accessory' },
  gear: { title: 'Gear', items: GEAR },
};
const BACK_ITEMS = new Set(['backpack', 'cape', 'wings', 'sword']);

export class UI {
  constructor(game) {
    this.game = game;
    this.labels = new Map();
    this.custCat = 'skin';
    this.invTab = 'gear';
    this.bindMenu();
    this.bindHud();
    this.bindSettings();
    this.bindCustomize();
    this.bindModals();
    // gentle UI sounds on every button
    document.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button, .swatch, .item, .slot')) game.audio.play('click');
    });
  }

  // ---------- generic ----------
  show(id) { $(id).classList.add('show'); $(id).classList.remove('hidden'); }
  hide(id) { $(id).classList.remove('show'); }
  modal(id, on) { $(id).classList.toggle('hidden', !on); }
  isModalOpen() { return ['inventory', 'settings', 'pause', 'finish', 'confirm'].some((m) => !$(m).classList.contains('hidden')); }
  isOpen(id) { return !$(id).classList.contains('hidden'); }
  setLockHint(on) { $('lock-hint').classList.toggle('hidden', !on); }
  closeModals() { ['inventory', 'settings', 'pause', 'finish', 'confirm'].forEach((m) => this.modal(m, false)); }

  setLoading(frac, text) { $('load-fill').style.width = `${Math.round(frac * 100)}%`; if (text) $('load-text').textContent = text; }
  hideLoading() { $('loading').classList.remove('show'); }

  fade(on) { $('fade').classList.toggle('on', on); }

  toast(text, { icon = '✨', cls = '' } = {}) {
    const el = document.createElement('div');
    el.className = `toast ${cls}`;
    el.innerHTML = `<span class="t-ico">${icon}</span><span>${esc(text)}</span>`;
    $('toasts').appendChild(el);
    setTimeout(() => el.remove(), 3700);
    while ($('toasts').children.length > 4) $('toasts').firstChild.remove();
  }

  areaBanner(name) {
    const el = $('area-banner');
    el.innerHTML = `<small>NOW ENTERING</small>${esc(name)}`;
    el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  }

  confirm(title, text, onYes, { yes = 'Yes', danger = true } = {}) {
    $('confirm-yes').textContent = yes;
    $('confirm-yes').className = `btn small ${danger ? 'btn-red' : 'btn-play'}`;
    $('confirm-title').textContent = title;
    $('confirm-text').textContent = text;
    this.modal('confirm', true);
    $('confirm-yes').onclick = () => { this.modal('confirm', false); onYes(); };
    $('confirm-no').onclick = () => this.modal('confirm', false);
  }

  // ---------- main menu ----------
  bindMenu() {
    const g = this.game;
    $('btn-play').onclick = () => g.play();
    $('btn-avatar').onclick = () => g.openCustomize();
    $('btn-settings').onclick = () => this.openSettings();
    const name = $('profile-name');
    name.addEventListener('change', () => {
      const v = name.value.trim().replace(/[^\w\- ]/g, '').slice(0, 16);
      g.profile.name = v || g.profile.name;
      name.value = g.profile.name;
      g.saveProfile();
      this.refreshProfile();
    });
    name.addEventListener('keydown', (e) => { if (e.key === 'Enter') name.blur(); e.stopPropagation(); });
  }

  showMenu(on) {
    $('menu').classList.toggle('show', on);
    if (on) this.refreshProfile();
  }

  refreshProfile() {
    const p = this.game.profile;
    $('profile-name').value = p.name;
    $('profile-level').textContent = p.level;
    const need = xpToNext(p.level);
    $('profile-xp-fill').style.width = `${(p.xp / need) * 100}%`;
    $('profile-xp-text').textContent = `${p.xp} / ${need} XP`;
    $('stat-coins').textContent = p.coins;
    $('stat-best').textContent = formatTime(p.bestTime);
    $('stat-clears').textContent = p.stats.obbyCompletions;
    $('stat-friends').textContent = `${p.stats.npcsMet.length}/${NPC_DEFS.length}`;
    const nu = this.game.progression.nextUnlock();
    $('next-unlock').textContent = nu ? `🔓 Next unlock at level ${nu.item.level}: ${nu.item.name}` : '🏅 Everything unlocked — you legend!';
    if (this.game.thumbs) $('profile-thumb').style.backgroundImage = `url(${this.game.thumbs.shot(p.avatar, 'head')})`;
    this.refreshHud();
  }

  // ---------- HUD ----------
  bindHud() {
    const g = this.game;
    $('hud-menu').onclick = () => g.togglePause(true);
    $('hud-bag').onclick = () => this.toggleInventory();
    $('hud-avatar').onclick = () => g.openCustomize();
    document.querySelectorAll('.hotbar .slot[data-gear]').forEach((el) => {
      el.style.pointerEvents = 'auto';
      el.onclick = () => g.toggleGear(el.dataset.gear);
    });
  }

  showHud(on) { $('hud').classList.toggle('hidden', !on); }

  refreshHud(bump = false) {
    const p = this.game.profile;
    $('hud-name').textContent = p.name;
    $('hud-level').textContent = p.level;
    $('hud-xp-fill').style.width = `${(p.xp / xpToNext(p.level)) * 100}%`;
    $('hud-coins').textContent = p.coins;
    $('cust-coins').textContent = p.coins;
    if (bump) { const c = $('coin-chip'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump'); }
    document.querySelectorAll('.hotbar .slot[data-gear]').forEach((el) => {
      const id = el.dataset.gear;
      el.classList.toggle('locked', !this.game.progression.owns('gear', id));
      el.classList.toggle('equipped', p.gear === id);
    });
  }

  setTimer(visible, time, cp, total) {
    $('obby-timer').classList.toggle('hidden', !visible);
    if (visible) {
      $('timer-value').textContent = formatTime(time);
      $('timer-cp').textContent = `Checkpoint ${cp}/${total}`;
    }
  }

  setPrompt(text) {
    const el = $('interact-prompt');
    if (!text) { el.classList.add('hidden'); return; }
    $('interact-text').textContent = text;
    el.classList.remove('hidden');
  }

  setFps(on, fps) {
    $('fps').classList.toggle('hidden', !on);
    if (on) $('fps').textContent = `${fps} FPS`;
  }

  // world-anchored labels: name tags and speech bubbles
  updateLabels(camera, npcs, playerPos) {
    const w = window.innerWidth, h = window.innerHeight;
    const v = new THREE.Vector3();
    const root = $('labels');
    for (const npc of npcs) {
      let L = this.labels.get(npc);
      if (!L) {
        const tag = document.createElement('div'); tag.className = 'nametag'; tag.textContent = npc.name;
        root.appendChild(tag);
        L = { tag, bubble: null, bubbleUntil: 0 };
        this.labels.set(npc, L);
      }
      v.copy(npc.headPos);
      const dist = v.distanceTo(playerPos);
      v.project(camera);
      const visible = v.z < 1 && dist < 60;
      const x = (v.x * 0.5 + 0.5) * w, y = (-v.y * 0.5 + 0.5) * h;
      L.tag.style.display = visible && dist < 40 ? '' : 'none';
      L.tag.style.left = `${x}px`; L.tag.style.top = `${y}px`;
      L.tag.style.opacity = String(Math.min(1, (40 - dist) / 10));
      if (L.bubble) {
        if (performance.now() > L.bubbleUntil || dist > 24) { L.bubble.remove(); L.bubble = null; L.tag.style.visibility = ''; }
        else { L.bubble.style.left = `${x}px`; L.bubble.style.top = `${y - 6}px`; L.bubble.style.display = visible ? '' : 'none'; L.tag.style.visibility = 'hidden'; }
      }
    }
  }

  speak(npc, text, seconds = 4.8) {
    const L = this.labels.get(npc);
    if (!L) return;
    L.bubble?.remove();
    const b = document.createElement('div');
    b.className = 'bubble';
    b.innerHTML = `<b>${esc(npc.name)}</b>`;
    const span = document.createElement('span');
    b.appendChild(span);
    $('labels').appendChild(b);
    L.bubble = b;
    L.bubbleUntil = performance.now() + seconds * 1000;
    // typewriter effect with soft blips
    let i = 0;
    clearInterval(L.typer);
    L.typer = setInterval(() => {
      if (!b.isConnected || i >= text.length) { clearInterval(L.typer); return; }
      i = Math.min(text.length, i + 2);
      span.textContent = text.slice(0, i);
      if (i % 6 === 0) this.game.audio.play('blip');
    }, 28);
  }

  // ---------- inventory ----------
  toggleInventory(force) {
    const open = force ?? $('inventory').classList.contains('hidden');
    this.modal('inventory', open);
    if (open) this.renderInventory();
  }

  renderInventory() {
    const g = this.game, p = g.profile;
    document.querySelectorAll('#inv-tabs .tab').forEach((t) => t.classList.toggle('active', t.dataset.tab === this.invTab));
    const grid = $('inv-grid');
    grid.innerHTML = '';
    if (this.invTab === 'gear') {
      for (const gear of GEAR) {
        const owned = g.progression.owns('gear', gear.id);
        const el = document.createElement('button');
        el.className = `item ${p.gear === gear.id ? 'selected' : ''} ${owned ? '' : 'locked'}`;
        el.innerHTML = `<div class="thumb"><div class="slot-ico" style="--c:${gear.color};width:40px;height:40px;border-width:7px"></div></div>${esc(gear.name)}<span class="muted" style="font-size:11px">${esc(gear.desc)}</span>${owned ? `<span class="tag ${p.gear === gear.id ? 'equipped' : 'owned'}">${p.gear === gear.id ? 'Equipped' : 'Equip'}</span>` : `<span class="tag lock">Shop · Lv ${gear.level}</span>`}`;
        el.onclick = () => { if (owned) { g.toggleGear(gear.id); this.renderInventory(); } else { this.toast('Buy this in the Avatar Shop (Gear tab).', { icon: '🛒' }); } };
        grid.appendChild(el);
      }
    } else {
      const lists = [['hat', HATS], ['accessory', ACCESSORIES], ['hair', HAIRS], ['face', FACES]];
      let any = false;
      for (const [cat, list] of lists) for (const item of list) {
        if (item.id === 'none' || !g.progression.owns(cat, item.id)) continue;
        any = true;
        const equipped = p.avatar[cat] === item.id;
        const el = document.createElement('button');
        el.className = `item ${equipped ? 'selected' : ''}`;
        el.innerHTML = `<div class="thumb" style="background-image:url(${this.thumbFor(cat, item.id, p.avatar)})"></div>${esc(item.name)}<span class="tag ${equipped ? 'equipped' : 'owned'}">${equipped ? 'Wearing' : 'Wear'}</span>`;
        el.onclick = () => {
          p.avatar[cat] = equipped && (cat === 'hat' || cat === 'accessory') ? 'none' : item.id;
          g.applyAvatar(p.avatar); g.saveProfile(); g.audio.play('equip'); this.renderInventory();
        };
        grid.appendChild(el);
      }
      if (!any) grid.innerHTML = '<div class="empty">Your wardrobe is empty. Visit the Avatar Shop!</div>';
    }
  }

  thumbFor(cat, id, base) {
    const t = this.game.thumbs;
    if (cat === 'face') return t.face(id, base.skin);
    const cfg = { ...base, [cat]: id };
    if (cat === 'hair') cfg.hat = 'none';
    if (cat === 'accessory') return t.shot(cfg, BACK_ITEMS.has(id) ? 'back' : 'body');
    return t.shot(cfg, 'head');
  }

  // ---------- customize ----------
  bindCustomize() {
    document.querySelectorAll('#cust-tabs .tab').forEach((t) => {
      t.onclick = () => { this.custCat = t.dataset.cat; this.renderCustomize(); };
    });
    $('cust-save').onclick = () => this.game.closeCustomize(true);
    $('cust-cancel').onclick = () => this.game.closeCustomize(false);
    $('cust-random').onclick = () => this.game.randomizeDraft();
    document.querySelectorAll('#inv-tabs .tab').forEach((t) => { t.onclick = () => { this.invTab = t.dataset.tab; this.renderInventory(); }; });
  }

  showCustomize(on) {
    $('customize').classList.toggle('show', on);
    if (on) this.renderCustomize();
  }

  renderCustomize() {
    const g = this.game, draft = g.draft, prog = g.progression;
    const info = CAT_INFO[this.custCat];
    document.querySelectorAll('#cust-tabs .tab').forEach((t) => t.classList.toggle('active', t.dataset.cat === this.custCat));
    $('cust-title').textContent = info.title;
    $('cust-coins').textContent = g.profile.coins;
    const grid = $('cust-grid');
    const extra = $('cust-extra');
    grid.innerHTML = ''; extra.innerHTML = '';
    grid.className = 'cust-grid' + (info.colors ? ' colors' : '');

    const swatches = (container, colors, key) => {
      for (const c of colors) {
        const s = document.createElement('button');
        s.className = `swatch ${draft[key].toLowerCase() === c.toLowerCase() ? 'selected' : ''}`;
        s.style.background = c;
        s.title = c;
        s.onclick = () => { draft[key] = c; g.updateDraft(); this.renderCustomize(); };
        container.appendChild(s);
      }
    };

    if (info.colors) { swatches(grid, info.colors, info.key); return; }

    for (const item of info.items) {
      const isGear = this.custCat === 'gear';
      const owned = prog.owns(this.custCat, item.id);
      const selected = isGear ? g.profile.gear === item.id : draft[info.key] === item.id;
      const locked = g.profile.level < item.level && !owned;
      const el = document.createElement('button');
      el.className = `item ${selected ? 'selected' : ''} ${locked ? 'locked' : ''}`;
      let tag;
      if (selected && (owned || item.price === 0)) tag = `<span class="tag equipped">${isGear ? 'Equipped' : 'Wearing'}</span>`;
      else if (owned) tag = '<span class="tag owned">Owned</span>';
      else if (locked) tag = `<span class="tag lock">🔒 Level ${item.level}</span>`;
      else tag = `<span class="tag price">🪙 ${item.price}</span>`;
      const thumb = isGear
        ? `<div class="thumb"><div class="slot-ico" style="--c:${item.color};width:38px;height:38px;border-width:7px"></div></div>`
        : item.id === 'none' ? '<div class="thumb">∅</div>'
          : `<div class="thumb" style="background-image:url(${this.thumbFor(this.custCat, item.id, draft)})"></div>`;
      el.innerHTML = `${thumb}<span>${esc(item.name)}</span>${tag}`;
      el.onclick = () => g.selectItem(this.custCat, item.id);
      grid.appendChild(el);
    }
    if (this.custCat === 'hair') {
      extra.innerHTML = '<div class="sub">Hair Colour</div>';
      const row = document.createElement('div'); row.className = 'cust-grid colors'; extra.appendChild(row);
      swatches(row, HAIR_COLORS, 'hairColor');
    }
  }

  // ---------- settings ----------
  bindSettings() {
    const g = this.game;
    document.querySelectorAll('[data-set]').forEach((el) => {
      const key = el.dataset.set;
      el.addEventListener('input', () => {
        g.profile.settings[key] = el.type === 'checkbox' ? el.checked : parseFloat(el.value);
        g.applySettings(); g.saveProfile();
      });
    });
    document.querySelectorAll('[data-seg] button').forEach((b) => {
      b.onclick = () => {
        const key = b.parentElement.dataset.seg;
        g.profile.settings[key] = b.dataset.v;
        g.applySettings(); g.saveProfile(); this.syncSettings();
      };
    });
    $('reset-progress').onclick = () => this.confirm('Reset progress?', 'This wipes your level, coins, items and best time. This cannot be undone.', () => g.resetProgress());
  }

  openSettings() { this.syncSettings(); this.modal('settings', true); }

  syncSettings() {
    const s = this.game.profile.settings;
    document.querySelectorAll('[data-set]').forEach((el) => {
      const v = s[el.dataset.set];
      if (el.type === 'checkbox') el.checked = !!v; else el.value = v;
    });
    document.querySelectorAll('[data-seg]').forEach((seg) => {
      seg.querySelectorAll('button').forEach((b) => b.classList.toggle('active', s[seg.dataset.seg] === b.dataset.v));
    });
  }

  // ---------- modals ----------
  bindModals() {
    const g = this.game;
    document.querySelectorAll('[data-close]').forEach((b) => {
      b.addEventListener('click', () => b.closest('.modal').classList.add('hidden'));
    });
    $('pause-resume').onclick = () => g.togglePause(false);
    $('pause-avatar').onclick = () => { this.modal('pause', false); g.openCustomize(); };
    $('pause-settings').onclick = () => this.openSettings();
    $('pause-respawn').onclick = () => { g.togglePause(false); g.killPlayer('reset'); };
    $('pause-leave').onclick = () => { this.modal('pause', false); g.toMenu(); };
    $('finish-again').onclick = () => { this.modal('finish', false); g.restartObby(); };
    $('finish-close').onclick = () => this.modal('finish', false);
  }

  showFinish(time, best, isNew, rewards) {
    $('finish-time').textContent = formatTime(time);
    const b = $('finish-best');
    b.textContent = isNew ? '★ NEW PERSONAL BEST! ★' : `Personal best: ${formatTime(best)}`;
    b.classList.toggle('new', isNew);
    $('finish-rewards').innerHTML = rewards.map((r) => `<div class="reward">${esc(r)}</div>`).join('');
    this.modal('finish', true);
  }
}
