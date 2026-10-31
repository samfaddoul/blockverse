import * as THREE from 'three';
import { Batcher, studBoxGeometry } from '../world/batcher.js';
import { Collider } from '../world/collision.js';
import { makeLavaTexture, makeCheckerTexture, makeSignTexture } from '../world/textures.js';

const PALETTE = ['#ff4d5e', '#ffb020', '#36d07a', '#2f9bff', '#a96bff', '#ff6fb5', '#18c9c9'];

// The Sky Obby: a floating obstacle course off the east edge of the island.
export class Obby {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.col = world.col;
    this.batch = new Batcher();
    this.movers = [];
    this.vanishers = [];
    this.spinners = [];
    this.checkpoints = [];
    this.coinSpots = [];
    this.lavaMats = [];
    this.state = 'idle';     // idle | running | finished
    this.time = 0;
    this.currentCheckpoint = 0;
    this.t = 0;
    this.build();
    scene.add(this.batch.build(world.studMat, world.smoothMat));
  }

  plat(x, topY, z, w, d, color, h = 1) {
    this.batch.addBox(x, topY - h / 2, z, w, h, d, color, { studs: true, shade: 0.7 });
    this.col.addBox(x, topY - h / 2, z, w, h, d);
  }

  build() {
    let ci = 0;
    const color = () => PALETTE[ci++ % PALETTE.length];

    // ---- entrance + start
    this.plat(116, 0, 0, 12, 12, '#e8eef7');
    this.archway(110.5, 0, 'SKY OBBY', '#c62828');
    this.checkpoint(118, 0, 0, 0, true);

    // ---- stage 1: floating stepping stones
    const s1 = [[127, 1, 0], [133, 2, 3], [139, 3, -2], [145.5, 3, 2.5], [152, 4, -3], [158, 5, 0]];
    s1.forEach(([x, y, z]) => this.plat(x, y, z, 4, 4, color()));
    this.coinSpots.push([139, 4.3, -2], [152, 5.3, -3]);

    // checkpoint 1
    this.plat(167, 5, 0, 8, 8, '#eceff1');
    this.checkpoint(167, 5, 0, 1);

    // ---- stage 2: moving platforms
    this.mover(176.5, 5, 0, 4, 4, color(), { axis: 'z', amp: 5, speed: 1.2, phase: 0 });
    this.mover(183.5, 5, 0, 4, 4, color(), { axis: 'z', amp: 5, speed: 1.2, phase: Math.PI });
    this.mover(190.5, 5, 0, 4, 4, color(), { axis: 'z', amp: 5, speed: 1.4, phase: 0.6 });
    this.plat(198, 5.5, 0, 5, 5, color());
    this.mover(208, 6, 0, 4.5, 4.5, color(), { axis: 'x', amp: 4.5, speed: 1.0, phase: 0 });
    this.coinSpots.push([198, 6.8, 0], [208, 7.3, 0]);

    // checkpoint 2
    this.plat(222, 6, 0, 8, 8, '#eceff1');
    this.checkpoint(222, 6, 0, 2);

    // ---- stage 3: disappearing platforms
    const s3 = [[231, 6, 0], [236.5, 6.5, 2], [242, 7, -1], [247.5, 7.5, 2], [253, 8, 0], [258.5, 8, -2]];
    s3.forEach(([x, y, z]) => this.vanisher(x, y, z, 3.6, color()));
    this.plat(266, 8, 0, 6, 6, color());
    this.coinSpots.push([242, 8.3, -1], [253, 9.3, 0]);

    // ---- stage 4: spinners on a long walkway
    this.plat(287, 8, 0, 30, 7, '#eceff1');
    for (const x of [276.5, 287, 297.5]) this.batch.addBox(x, 8.3, 0, 0.1, 0.6, 7, '#ffd54f', { studs: false });
    this.spinner(280, 8, 0, 3.4, 1.8, 1);
    this.spinner(292, 8, 0, 3.4, -2.3, 2);
    this.coinSpots.push([286, 9.3, 2.6], [286, 9.3, -2.6]);

    // checkpoint 3
    this.plat(308, 8, 0, 8, 8, '#eceff1');
    this.checkpoint(308, 8, 0, 3);

    // ---- stage 5: the floor is lava
    this.plat(331, 8, 0, 38, 8, '#546e7a');
    const lavaTex = makeLavaTexture(this.world.renderer);
    this.lavaTex = lavaTex;
    // Lava sits flush with the floor. The deadly zone is inset from the visible edge,
    // so you only burn when your body is really over the lava, not when you brush past it.
    const lavaPool = (x, z, w, d) => {
      const geo = new THREE.BoxGeometry(w, 0.08, d);
      const mat = new THREE.MeshStandardMaterial({ map: lavaTex, emissive: '#ff4500', emissiveIntensity: 0.9, emissiveMap: lavaTex, roughness: 0.4 });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, 8.04, z);
      m.receiveShadow = true;
      this.scene.add(m);
      const inset = 0.5;
      this.col.add(Collider.fromCenter(x, 8.2, z, Math.max(0.2, w - inset * 2), 0.4, Math.max(0.2, d - inset * 2), 'trigger', { lava: true }));
    };
    // three strips to hop over, getting a little wider
    lavaPool(318, 0, 2.0, 8);
    lavaPool(323.5, 0, 2.4, 8);
    lavaPool(329, 0, 2.6, 8);
    // a lava pool crossed on raised stepping stones
    lavaPool(337, 0, 10, 8);
    for (const [x, z] of [[333.6, 1.6], [337, -1.6], [340.4, 1.6]]) this.plat(x, 8.5, z, 2.6, 2.6, '#8d6e63', 0.6);
    lavaPool(346, 0, 2.2, 8);
    this.coinSpots.push([323.5, 9.9, 0], [337, 9.9, -1.6], [346, 9.9, 0]);
    this.lavaLight = new THREE.PointLight('#ff6a00', 30, 26, 2);
    this.lavaLight.position.set(331, 11, 0);
    this.scene.add(this.lavaLight);

    // ---- stage 6: elevator + final climb
    this.mover(354, 8, 0, 5, 5, '#ffd54f', { axis: 'y', amp: 4.5, speed: 0.8, phase: -Math.PI / 2, base: 12.5 });
    this.plat(362, 17, 0, 4, 4, color());
    this.mover(369, 18, 0, 4, 4, color(), { axis: 'z', amp: 4, speed: 1.6, phase: 0 });
    this.vanisher(375.5, 18.5, 0, 3.6, color());
    this.coinSpots.push([362, 18.3, 0], [354, 19, 0]);

    // ---- finish
    this.plat(385, 19, 0, 12, 12, '#eceff1');
    const check = makeCheckerTexture(this.world.renderer);
    check.repeat.set(3, 3);
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(10, 3), new THREE.MeshStandardMaterial({ map: check, roughness: 0.8 }));
    fl.rotation.x = -Math.PI / 2; fl.position.set(381, 19.02, 0); fl.receiveShadow = true;
    this.scene.add(fl);
    this.archway(381, 19, 'FINISH', '#2e7d32');
    this.finishCollider = this.col.add(Collider.fromCenter(382, 20.5, 0, 3, 3, 10, 'trigger', { finish: true }));
    this.finishPos = new THREE.Vector3(386, 19, 0);
    // trophy
    const gold = new THREE.MeshStandardMaterial({ color: '#ffc107', metalness: 0.8, roughness: 0.25, emissive: '#6b4a00', emissiveIntensity: 0.3 });
    const trophy = new THREE.Group();
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 0.6, 1.6, 20), gold); cup.position.y = 2.6;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1, 12), gold); stem.position.y = 1.4;
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.6, 1.6), new THREE.MeshStandardMaterial({ color: '#37474f' })); base.position.y = 0.6;
    trophy.add(cup, stem, base);
    trophy.traverse((o) => { o.castShadow = true; });
    trophy.position.set(389, 19, 0);
    this.trophy = trophy;
    this.scene.add(trophy);
    this.col.addBox(389, 19.6, 0, 1.6, 1.2, 1.6);
    // return portal
    this.portal = this.makePortal(386, 19, -4.2);
    this.portalCollider = this.col.add(Collider.fromCenter(386, 20.5, -4.2, 2, 3, 1.2, 'trigger', { portal: true }));

    // decorative support pillars under key platforms (makes the course feel anchored)
    for (const [x, y] of [[167, 5], [222, 6], [308, 8], [385, 19]]) {
      this.batch.addBox(x, y - 1 - 6, 0, 2, 12, 2, '#90a4ae', { shade: 0.6, faces: { bottom: true } });
    }
  }

  archway(x, y, text, color) {
    for (const z of [-5.5, 5.5]) {
      this.batch.addBox(x, y + 3, z, 1.2, 6, 1.2, '#eceff1', { studs: true });
      this.col.addBox(x, y + 3, z, 1.2, 6, 1.2);
    }
    this.batch.addBox(x, y + 6.5, 0, 1.4, 1, 12.4, color, { studs: true });
    const tex = makeSignTexture(text, { bg: color, accent: '#ffffff', w: 768, h: 160 });
    for (const side of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.9), new THREE.MeshBasicMaterial({ map: tex }));
      m.position.set(x + side * 0.72, y + 6.5, 0);
      m.rotation.y = side * Math.PI / 2;
      this.scene.add(m);
    }
  }

  checkpoint(x, y, z, index, isStart = false) {
    const pad = new THREE.Mesh(studBoxGeometry(3.2, 0.1, 3.2), new THREE.MeshStandardMaterial({ map: this.world.studTex, color: isStart ? '#1E88E5' : '#9e9e9e', roughness: 0.6 }));
    pad.position.set(x, y + 0.05, z);
    pad.receiveShadow = true;
    this.scene.add(pad);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4.2, 10), new THREE.MeshStandardMaterial({ color: '#eceff1', metalness: 0.4, roughness: 0.4 }));
    pole.position.set(x + 2.2, y + 2.1, z + 2.2); pole.castShadow = true;
    this.scene.add(pole);
    const flag = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.9, 0.06), new THREE.MeshStandardMaterial({ color: isStart ? '#1E88E5' : '#e53935', roughness: 0.7 }));
    flag.position.set(x + 2.2 - 0.75, y + 3.7, z + 2.2); flag.castShadow = true;
    this.scene.add(flag);
    const collider = this.col.add(Collider.fromCenter(x, y + 1.5, z, 3.2, 3, 3.2, 'trigger', { checkpoint: index }));
    this.checkpoints[index] = { index, pos: new THREE.Vector3(x, y + 0.3, z), pad, flag, collider, reached: isStart };
    if (isStart) this.startCollider = collider;
  }

  mover(x, y, z, w, d, color, { axis, amp, speed, phase, base }) {
    const mesh = new THREE.Mesh(studBoxGeometry(w, 1, d), new THREE.MeshStandardMaterial({ map: this.world.studTex, color, roughness: 0.75 }));
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.scene.add(mesh);
    // glowing underside strip so movers read clearly as "special"
    const glow = new THREE.Mesh(new THREE.BoxGeometry(w * 0.7, 0.08, d * 0.7), new THREE.MeshBasicMaterial({ color: '#ffffff' }));
    glow.position.y = -0.52; mesh.add(glow);
    const c = this.col.addDynamic(Collider.fromCenter(x, y - 0.5, z, w, 1, d));
    const origin = new THREE.Vector3(x, (base ?? y) - 0.5, z);
    this.movers.push({ mesh, c, origin, axis, amp, speed, phase, last: origin.clone() });
  }

  vanisher(x, y, z, size, color) {
    const mat = new THREE.MeshStandardMaterial({ map: this.world.studTex, color, roughness: 0.75, transparent: true, opacity: 1 });
    const mesh = new THREE.Mesh(studBoxGeometry(size, 1, size), mat);
    mesh.position.set(x, y - 0.5, z);
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.scene.add(mesh);
    // dashed outline so players know it's a trick platform
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(size + 0.04, 1.04, size + 0.04)), new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.8 }));
    mesh.add(edges);
    const c = this.col.addDynamic(Collider.fromCenter(x, y - 0.5, z, size, 1, size));
    this.vanishers.push({ mesh, mat, edges, c, state: 'solid', timer: 0, baseColor: new THREE.Color(color) });
  }

  spinner(x, y, z, radius, speed, arms) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.6, 1.6, 16), new THREE.MeshStandardMaterial({ color: '#37474f', roughness: 0.5, metalness: 0.3 }));
    post.position.y = 0.8; post.castShadow = true;
    g.add(post);
    this.col.addBox(x, y + 0.8, z, 0.9, 1.6, 0.9, 'solid', { noCamera: true });
    const rotor = new THREE.Group(); rotor.position.y = 1.0; g.add(rotor);
    const barMat = new THREE.MeshStandardMaterial({ color: '#ff1744', emissive: '#7f0000', emissiveIntensity: 0.4, roughness: 0.35 });
    const stripe = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.4 });
    for (let i = 0; i < arms; i++) {
      const arm = new THREE.Group(); arm.rotation.y = (i * Math.PI * 2) / arms; rotor.add(arm);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(radius * 2, 0.55, 0.55), barMat);
      bar.castShadow = true; arm.add(bar);
      for (let k = -2; k <= 2; k++) {
        const s = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.57, 0.57), stripe);
        s.position.x = k * radius * 0.4; arm.add(s);
      }
    }
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.3, 16), barMat); cap.position.y = 1.35; g.add(cap);
    this.scene.add(g);
    this.spinners.push({ rotor, x, y, z, radius, speed, arms });
  }

  makePortal(x, y, z) {
    const g = new THREE.Group();
    const frame = new THREE.MeshStandardMaterial({ color: '#5e35b1', roughness: 0.4 });
    for (const sx of [-1.3, 1.3]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3.6, 0.5), frame); p.position.set(sx, 1.8, 0); p.castShadow = true; g.add(p); }
    const top = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.5, 0.5), frame); top.position.y = 3.6; g.add(top);
    const swirl = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 3.2), new THREE.MeshBasicMaterial({ color: '#b388ff', transparent: true, opacity: 0.75, side: THREE.DoubleSide }));
    swirl.position.y = 1.8; g.add(swirl);
    const label = new THREE.Mesh(new THREE.PlaneGeometry(3, 0.7), new THREE.MeshBasicMaterial({ map: makeSignTexture('BACK TO SPAWN', { bg: '#5e35b1', accent: '#fff', w: 512, h: 120 }), transparent: true }));
    label.position.y = 4.4; g.add(label);
    g.position.set(x, y, z);
    this.scene.add(g);
    this.portalSwirl = swirl;
    return g;
  }

  // ---------------- runtime ----------------
  update(dt, player) {
    this.t += dt;
    if (this.state === 'running') this.time += dt;

    for (const m of this.movers) {
      const off = Math.sin(this.t * m.speed + m.phase) * m.amp;
      const p = m.origin.clone();
      p[m.axis] += off;
      m.c.dx = p.x - m.last.x; m.c.dy = p.y - m.last.y; m.c.dz = p.z - m.last.z;
      m.c.setCenter(p.x, p.y, p.z);
      m.mesh.position.copy(p);
      m.last.copy(p);
    }

    for (const v of this.vanishers) {
      const standing = player.grounded && player.ground === v.c;
      if (v.state === 'solid' && standing) { v.state = 'fading'; v.timer = 0.7; }
      if (v.state === 'fading') {
        v.timer -= dt;
        const k = Math.max(0, v.timer / 0.7);
        v.mat.opacity = 0.25 + 0.75 * k;
        v.mesh.position.x += Math.sin(this.t * 60) * 0.02; // shake
        if (v.timer <= 0) { v.state = 'gone'; v.timer = 2.6; v.c.active = false; v.mesh.visible = false; this.onVanish?.(); }
      } else if (v.state === 'gone') {
        v.timer -= dt;
        if (v.timer <= 0) { v.state = 'solid'; v.c.active = true; v.mesh.visible = true; v.mat.opacity = 1; v.mesh.position.set((v.c.minX + v.c.maxX) / 2, (v.c.minY + v.c.maxY) / 2, (v.c.minZ + v.c.maxZ) / 2); }
      }
    }

    // spinners: knock the player away when the bar sweeps through them
    for (const s of this.spinners) {
      s.rotor.rotation.y += s.speed * dt;
      const py = player.pos.y;
      if (py > s.y + 1.3 || py + 2.6 < s.y + 0.7) continue;
      const lx = player.pos.x - s.x, lz = player.pos.z - s.z;
      if (Math.hypot(lx, lz) > s.radius + 0.9) continue;
      for (let i = 0; i < s.arms; i++) {
        const a = s.rotor.rotation.y + (i * Math.PI * 2) / s.arms;
        // bar runs along local x of the arm: direction (cos a, -sin a)
        const dx = Math.cos(a), dz = -Math.sin(a);
        const t = THREE.MathUtils.clamp(lx * dx + lz * dz, -s.radius, s.radius);
        const cx = dx * t, cz = dz * t;
        const ddx = lx - cx, ddz = lz - cz;
        const dist = Math.hypot(ddx, ddz);
        if (dist < 0.85) {
          // sweep the player along the bar's direction of travel
          let nx = s.speed * cz, nz = -s.speed * cx;
          const nl = Math.hypot(nx, nz);
          if (nl > 0.3) { nx /= nl; nz /= nl; } else if (dist > 0.01) { nx = ddx / dist; nz = ddz / dist; } else { nx = 1; nz = 0; }
          player.applyKnockback(nx * 22, 9, nz * 22);
          this.onHit?.();
          break;
        }
      }
    }

    // animations
    this.lavaTex.offset.set(this.t * 0.05, this.t * 0.03);
    this.lavaLight.intensity = 26 + Math.sin(this.t * 3) * 6;
    this.trophy.rotation.y += dt * 1.2;
    this.portalSwirl.material.opacity = 0.55 + Math.sin(this.t * 4) * 0.2;
    for (const cp of this.checkpoints) if (cp) cp.flag.rotation.y = Math.sin(this.t * 3 + cp.index) * 0.15;

    // timer control: start when leaving the start pad, cancel when back on the island
    const x = player.pos.x;
    if (this.state !== 'running' && x > 122.5 && x < 125 && this.currentCheckpoint === 0 && player.pos.y > -2) this.start();
    if (this.state === 'running' && x < 109) this.cancel();
  }

  start() { this.state = 'running'; this.time = 0; this.onStart?.(); }
  cancel() { this.state = 'idle'; this.time = 0; this.resetCheckpoints(); this.onCancel?.(); }

  resetCheckpoints() {
    this.currentCheckpoint = 0;
    this.checkpoints.forEach((cp, i) => { if (i > 0) { cp.reached = false; cp.pad.material.color.set('#9e9e9e'); cp.flag.material.color.set('#e53935'); } });
  }

  reachCheckpoint(i) {
    const cp = this.checkpoints[i];
    if (!cp || i <= this.currentCheckpoint) return false;
    this.currentCheckpoint = i;
    cp.reached = true;
    cp.pad.material.color.set('#43a047');
    cp.flag.material.color.set('#43a047');
    if (this.state !== 'running') { this.state = 'running'; }
    return true;
  }

  finish() {
    if (this.state !== 'running') return null;
    this.state = 'finished';
    const t = this.time;
    return t;
  }

  respawnPoint() { return this.checkpoints[this.currentCheckpoint].pos.clone(); }

  // returns true if the player is somewhere on the obby side of the island
  contains(p) { return p.x > 109; }
}
