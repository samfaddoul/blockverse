import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { getFaceTexture } from '../world/textures.js';
import { DEFAULT_AVATAR, GEAR } from '../core/catalog.js';

// Shared geometry (built once, reused by every avatar).
const G = {
  head: new RoundedBoxGeometry(0.74, 0.68, 0.68, 4, 0.17),
  torso: new RoundedBoxGeometry(1.0, 1.0, 0.5, 2, 0.06),
  sleeve: new RoundedBoxGeometry(0.48, 0.58, 0.48, 2, 0.06),
  hand: new RoundedBoxGeometry(0.46, 0.44, 0.46, 2, 0.08),
  leg: new RoundedBoxGeometry(0.48, 0.84, 0.48, 2, 0.05),
  shoe: new RoundedBoxGeometry(0.5, 0.2, 0.54, 2, 0.06),
  box: new THREE.BoxGeometry(1, 1, 1),
  rbox: new RoundedBoxGeometry(1, 1, 1, 2, 0.12),
  cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 24),
  cone: new THREE.ConeGeometry(0.5, 1, 20),
  sphere: new THREE.SphereGeometry(0.5, 16, 12),
  facePlane: new THREE.PlaneGeometry(0.62, 0.62),
  torus: new THREE.TorusGeometry(0.32, 0.05, 10, 32),
};

const plastic = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.02, ...extra });

function part(geo, mat, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));

export class Avatar {
  constructor(config = DEFAULT_AVATAR) {
    this.root = new THREE.Group();     // positioned at the feet, faces +Z
    this.body = new THREE.Group();     // bobbing / leaning happens here
    this.root.add(this.body);

    this.mats = {
      skin: plastic('#F5C99B'),
      shirt: plastic('#1E88E5'),
      pants: plastic('#37474F'),
      shoe: plastic('#2a2a2a', { roughness: 0.7 }),
      hair: plastic('#4E342E', { roughness: 0.75 }),
    };

    // Torso
    this.torso = part(G.torso, this.mats.shirt, 0, 1.5, 0);
    this.body.add(this.torso);
    this.collar = part(G.box, this.mats.skin, 0, 1.96, 0.14, 0.34, 0.08, 0.2);
    this.body.add(this.collar);

    // Head (pivot at the neck)
    this.headPivot = new THREE.Group();
    this.headPivot.position.set(0, 2.0, 0);
    this.body.add(this.headPivot);
    this.head = part(G.head, this.mats.skin, 0, 0.36, 0);
    this.headPivot.add(this.head);
    this.faceMat = new THREE.MeshStandardMaterial({ map: getFaceTexture('smile'), transparent: true, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 });
    this.face = new THREE.Mesh(G.facePlane, this.faceMat);
    this.face.position.set(0, 0.36, 0.342);
    this.headPivot.add(this.face);
    this.hairGroup = new THREE.Group();
    this.hatGroup = new THREE.Group();
    this.headPivot.add(this.hairGroup, this.hatGroup);

    // Limbs (pivots at shoulders / hips)
    const arm = (side) => {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.74, 1.94, 0);
      pivot.add(part(G.sleeve, this.mats.shirt, 0, -0.27, 0));
      pivot.add(part(G.hand, this.mats.skin, 0, -0.76, 0));
      this.body.add(pivot);
      return pivot;
    };
    const leg = (side) => {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.25, 1.0, 0);
      pivot.add(part(G.leg, this.mats.pants, 0, -0.42, 0));
      pivot.add(part(G.shoe, this.mats.shoe, 0, -0.9, 0.02));
      this.body.add(pivot);
      return pivot;
    };
    this.armL = arm(1); this.armR = arm(-1);
    this.legL = leg(1); this.legR = leg(-1);

    this.accGroup = new THREE.Group();
    this.body.add(this.accGroup);
    this.gearGroup = new THREE.Group();
    this.gearGroup.position.set(0, -0.95, 0.12);
    this.armR.add(this.gearGroup);

    this.phase = 0;
    this.time = Math.random() * 10;
    this.pose = { lean: 0, bob: 0, armSwing: 0, legSwing: 0, armUp: 0, legAir: 0 };
    this.wave = 0;
    this.cape = null;
    this.wings = null;
    this.config = null;
    this.setConfig(config);
  }

  setConfig(cfg) {
    const c = { ...DEFAULT_AVATAR, ...cfg };
    const prev = this.config || {};
    this.mats.skin.color.set(c.skin);
    this.mats.shirt.color.set(c.shirt);
    this.mats.pants.color.set(c.pants);
    this.mats.shoe.color.set(c.pants).multiplyScalar(0.45);
    this.mats.hair.color.set(c.hairColor);
    if (prev.face !== c.face) { this.faceMat.map = getFaceTexture(c.face); this.faceMat.needsUpdate = true; }
    if (prev.hair !== c.hair || prev.hat !== c.hat) this.buildHair(c.hair, c.hat);
    if (prev.hat !== c.hat) this.buildHat(c.hat);
    if (prev.accessory !== c.accessory) this.buildAccessory(c.accessory);
    this.config = c;
  }

  clear(group) {
    for (const ch of [...group.children]) {
      group.remove(ch);
      ch.traverse((o) => { if (o.material && o.material !== this.mats.hair && !Object.values(this.mats).includes(o.material)) o.material.dispose?.(); });
    }
  }

  buildHair(style, hat) {
    const g = this.hairGroup; this.clear(g);
    const m = this.mats.hair;
    const add = (x, y, z, sx, sy, sz, geo = G.rbox, rx = 0, rz = 0) => {
      const p = part(geo, m, x, y, z, sx, sy, sz); p.rotation.x = rx; p.rotation.z = rz; g.add(p); return p;
    };
    const hatOn = hat && hat !== 'none' && hat !== 'headphones' && hat !== 'halo';
    if (style === 'none') return;
    // Common cap of hair that hugs the head.
    const cap = () => {
      add(0, 0.66, -0.03, 0.8, 0.18, 0.76);
      add(0, 0.46, -0.34, 0.8, 0.5, 0.12);
      add(0.37, 0.52, -0.06, 0.1, 0.3, 0.64);
      add(-0.37, 0.52, -0.06, 0.1, 0.3, 0.64);
      add(-0.08, 0.6, 0.33, 0.62, 0.12, 0.08, G.rbox, 0, 0.12); // fringe
    };
    switch (style) {
      case 'short': cap(); break;
      case 'spiky':
        cap();
        if (!hatOn) for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          const s = add(Math.cos(a) * 0.2, 0.86, Math.sin(a) * 0.18 - 0.03, 0.22, 0.32, 0.22, G.cone);
          s.rotation.z = -Math.cos(a) * 0.5; s.rotation.x = Math.sin(a) * 0.5;
        }
        if (!hatOn) add(0, 0.9, 0, 0.24, 0.36, 0.24, G.cone);
        break;
      case 'long':
        cap();
        add(0, 0.12, -0.36, 0.82, 0.9, 0.14);
        add(0.39, 0.2, -0.08, 0.1, 0.7, 0.5);
        add(-0.39, 0.2, -0.08, 0.1, 0.7, 0.5);
        break;
      case 'bob':
        cap();
        add(0, 0.3, -0.36, 0.84, 0.6, 0.14);
        add(0.4, 0.32, 0.0, 0.12, 0.56, 0.6);
        add(-0.4, 0.32, 0.0, 0.12, 0.56, 0.6);
        break;
      case 'ponytail':
        cap();
        add(0, 0.62, -0.44, 0.22, 0.22, 0.18);
        { const t = add(0, 0.3, -0.52, 0.2, 0.6, 0.16); t.rotation.x = -0.25; }
        break;
      case 'mohawk':
        add(0.37, 0.46, -0.06, 0.06, 0.2, 0.6);
        add(-0.37, 0.46, -0.06, 0.06, 0.2, 0.6);
        if (!hatOn) for (let i = 0; i < 5; i++) add(0, 0.86 - Math.abs(i - 1.5) * 0.04, 0.26 - i * 0.15, 0.14, 0.42, 0.16, G.rbox, -0.25);
        break;
      case 'curly':
        for (let i = 0; i < 14; i++) {
          const a = (i / 14) * Math.PI * 2;
          add(Math.cos(a) * 0.32, 0.6 + (i % 2) * 0.08, Math.sin(a) * 0.3 - 0.04, 0.28, 0.28, 0.28, G.sphere);
        }
        if (!hatOn) { add(0, 0.76, 0, 0.6, 0.3, 0.6, G.sphere); add(0.1, 0.84, 0.12, 0.3, 0.3, 0.3, G.sphere); }
        add(0, 0.4, -0.34, 0.74, 0.46, 0.16, G.rbox);
        break;
      case 'buns':
        cap();
        if (!hatOn) { add(0.28, 0.86, -0.05, 0.3, 0.3, 0.3, G.sphere); add(-0.28, 0.86, -0.05, 0.3, 0.3, 0.3, G.sphere); }
        break;
    }
  }

  buildHat(hat) {
    const g = this.hatGroup; this.clear(g); this.halo = null;
    const add = (geo, mat, x, y, z, sx, sy, sz) => { const p = part(geo, mat, x, y, z, sx, sy, sz); g.add(p); return p; };
    switch (hat) {
      case 'cap': {
        const m = plastic('#E53935');
        add(G.sphere, m, 0, 0.7, -0.02, 0.82, 0.42, 0.78);
        add(G.box, m, 0, 0.66, 0.4, 0.62, 0.04, 0.34);
        add(G.box, plastic('#ffffff'), 0, 0.92, 0, 0.08, 0.04, 0.08);
        break;
      }
      case 'beanie': {
        const m = plastic('#FFB300', { roughness: 0.9 });
        add(G.sphere, m, 0, 0.72, 0, 0.84, 0.56, 0.8);
        add(G.cyl, plastic('#F57C00', { roughness: 0.9 }), 0, 0.6, 0, 0.86, 0.14, 0.82);
        add(G.sphere, plastic('#fff', { roughness: 1 }), 0, 1.02, 0, 0.2, 0.2, 0.2);
        break;
      }
      case 'tophat': {
        const m = plastic('#1b1b1f', { roughness: 0.4 });
        add(G.cyl, m, 0, 0.74, 0, 1.0, 0.05, 1.0);
        add(G.cyl, m, 0, 1.02, 0, 0.6, 0.56, 0.6);
        add(G.cyl, plastic('#c62828'), 0, 0.82, 0, 0.62, 0.1, 0.62);
        break;
      }
      case 'cowboy': {
        const m = plastic('#8D6E63', { roughness: 0.8 });
        const brim = add(G.cyl, m, 0, 0.74, 0, 1.25, 0.05, 1.1);
        brim.rotation.x = 0.05;
        add(G.rbox, m, 0, 0.92, 0, 0.6, 0.36, 0.58);
        add(G.cyl, plastic('#3E2723'), 0, 0.79, 0, 0.62, 0.08, 0.62);
        break;
      }
      case 'headphones': {
        const band = part(new THREE.TorusGeometry(0.42, 0.045, 8, 24, Math.PI), plastic('#212121'), 0, 0.42, 0);
        g.add(band);
        const cupM = plastic('#E91E63');
        add(G.cyl, cupM, 0.42, 0.4, 0, 0.3, 0.12, 0.3).rotation.z = Math.PI / 2;
        add(G.cyl, cupM, -0.42, 0.4, 0, 0.3, 0.12, 0.3).rotation.z = Math.PI / 2;
        break;
      }
      case 'cone': {
        add(G.cone, plastic('#FF6D00'), 0, 1.05, 0, 0.66, 0.72, 0.66);
        add(G.cyl, plastic('#fff'), 0, 1.0, 0, 0.42, 0.1, 0.42);
        add(G.box, plastic('#FF6D00'), 0, 0.72, 0, 0.8, 0.06, 0.8);
        break;
      }
      case 'crown': {
        const gold = plastic('#FFC107', { metalness: 0.7, roughness: 0.25, emissive: '#5a3a00', emissiveIntensity: 0.3 });
        add(G.cyl, gold, 0, 0.8, 0, 0.72, 0.16, 0.72);
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          add(G.cone, gold, Math.cos(a) * 0.3, 0.98, Math.sin(a) * 0.3, 0.14, 0.24, 0.14);
          add(G.sphere, plastic(i % 2 ? '#E53935' : '#1E88E5', { roughness: 0.2 }), Math.cos(a) * 0.36, 0.8, Math.sin(a) * 0.36, 0.08, 0.08, 0.08);
        }
        break;
      }
      case 'halo': {
        const h = add(G.torus, new THREE.MeshStandardMaterial({ color: '#FFF59D', emissive: '#FFEB3B', emissiveIntensity: 1.4 }), 0, 1.05, 0, 0.9, 0.9, 0.9);
        h.rotation.x = Math.PI / 2; h.castShadow = false;
        this.halo = h;
        break;
      }
    }
  }

  buildAccessory(acc) {
    const g = this.accGroup; this.clear(g);
    this.cape = null; this.wings = null; this.headFollow = null;
    const add = (geo, mat, x, y, z, sx, sy, sz, parent = g) => { const p = part(geo, mat, x, y, z, sx, sy, sz); parent.add(p); return p; };
    switch (acc) {
      case 'backpack': {
        const m = plastic('#FF7043');
        add(G.rbox, m, 0, 1.52, -0.38, 0.72, 0.8, 0.3);
        add(G.rbox, plastic('#E64A19'), 0, 1.36, -0.55, 0.5, 0.34, 0.1);
        add(G.box, plastic('#5D4037'), 0.26, 1.6, -0.02, 0.08, 0.9, 0.54);
        add(G.box, plastic('#5D4037'), -0.26, 1.6, -0.02, 0.08, 0.9, 0.54);
        break;
      }
      case 'glasses': {
        const m = plastic('#212121');
        const h = new THREE.Group(); h.position.copy(this.headPivot.position); g.add(h); this.headFollow = h;
        add(G.torus, m, 0.17, 0.42, 0.37, 0.42, 0.42, 0.42, h);
        add(G.torus, m, -0.17, 0.42, 0.37, 0.42, 0.42, 0.42, h);
        add(G.box, m, 0, 0.44, 0.37, 0.12, 0.03, 0.03, h);
        break;
      }
      case 'scarf': {
        const m = plastic('#D32F2F', { roughness: 0.95 });
        add(G.rbox, m, 0, 2.02, 0, 0.84, 0.18, 0.62);
        add(G.rbox, m, 0.22, 1.72, 0.28, 0.2, 0.5, 0.08);
        add(G.box, plastic('#FFFFFF', { roughness: 1 }), 0.22, 1.58, 0.33, 0.21, 0.06, 0.02);
        break;
      }
      case 'cape': {
        const pivot = new THREE.Group(); pivot.position.set(0, 1.98, -0.28); g.add(pivot);
        const m = plastic('#C62828', { side: THREE.DoubleSide, roughness: 0.8 });
        add(G.box, m, 0, -0.85, -0.03, 1.1, 1.7, 0.05, pivot);
        add(G.box, plastic('#FFC107', { metalness: 0.6, roughness: 0.3 }), 0.4, 0.0, 0.05, 0.16, 0.16, 0.08, pivot);
        add(G.box, plastic('#FFC107', { metalness: 0.6, roughness: 0.3 }), -0.4, 0.0, 0.05, 0.16, 0.16, 0.08, pivot);
        this.cape = pivot;
        break;
      }
      case 'sword': {
        const s = new THREE.Group(); s.position.set(0, 1.5, -0.32); s.rotation.z = 0.7; g.add(s);
        add(G.box, plastic('#90CAF9', { emissive: '#1565C0', emissiveIntensity: 0.25 }), 0, 0.3, 0, 0.16, 1.3, 0.06, s);
        add(G.box, plastic('#FFB300'), 0, -0.36, 0, 0.5, 0.08, 0.1, s);
        add(G.box, plastic('#5D4037'), 0, -0.56, 0, 0.1, 0.34, 0.1, s);
        break;
      }
      case 'wings': {
        const m = plastic('#FFFFFF', { roughness: 0.9 });
        const mk = (side) => {
          const w = new THREE.Group(); w.position.set(side * 0.18, 1.72, -0.3); g.add(w);
          for (let i = 0; i < 4; i++) add(G.rbox, m, side * (0.35 + i * 0.18), 0.25 - i * 0.12, -0.05, 0.36, 0.7 - i * 0.12, 0.08, w);
          return w;
        };
        this.wings = [mk(1), mk(-1)];
        break;
      }
    }
  }

  setGear(id) {
    this.clear(this.gearGroup);
    const gear = GEAR.find((x) => x.id === id);
    if (!gear) return;
    const m = plastic(gear.color, { emissive: gear.color, emissiveIntensity: 0.35, roughness: 0.3 });
    for (let i = 0; i < 5; i++) {
      const t = part(G.torus, m, 0, -0.05 - i * 0.08, 0, 0.35, 0.35, 0.35);
      t.rotation.x = Math.PI / 2;
      this.gearGroup.add(t);
    }
    this.gearGroup.add(part(G.cyl, plastic('#424242'), 0, 0.08, 0, 0.12, 0.2, 0.12));
  }

  // motion: { speed (units/s), runRatio 0..1, grounded, vy }
  update(dt, motion) {
    this.time += dt;
    const { speed = 0, grounded = true, vy = 0, runRatio = 0 } = motion;
    const moving = Math.min(1, speed / 6);
    const air = grounded ? 0 : 1;
    this.phase += dt * (4 + speed * 0.75) * (grounded ? 1 : 0.3);

    const P = this.pose;
    const swingAmp = (0.55 + runRatio * 0.45) * moving * (1 - air);
    P.armSwing = damp(P.armSwing, swingAmp, 12, dt);
    P.legSwing = damp(P.legSwing, swingAmp * 1.05, 12, dt);
    P.armUp = damp(P.armUp, air ? (vy > 0 ? 1 : 0.8) : 0, 10, dt);
    P.legAir = damp(P.legAir, air, 10, dt);
    P.lean = damp(P.lean, moving * (0.04 + runRatio * 0.12) * (1 - air), 6, dt);
    const s = Math.sin(this.phase);

    const idle = 1 - moving;
    const breathe = Math.sin(this.time * 2.2) * 0.02 * idle;

    // Legs
    this.legL.rotation.x = s * P.legSwing - P.legAir * 0.35;
    this.legR.rotation.x = -s * P.legSwing + P.legAir * 0.25;
    // Arms: swing opposite to legs, raise when airborne, idle sway
    const wave = this.wave > 0 ? 1 : 0;
    this.armL.rotation.x = -s * P.armSwing * 0.9 - P.armUp * 2.7 + breathe;
    this.armR.rotation.x = s * P.armSwing * 0.9 - P.armUp * 2.7 - breathe;
    this.armL.rotation.z = 0.05 + idle * Math.sin(this.time * 1.6) * 0.03 + P.armUp * 0.25;
    this.armR.rotation.z = -0.05 - idle * Math.sin(this.time * 1.6 + 1) * 0.03 - P.armUp * 0.25;
    if (wave) {
      this.wave -= dt;
      this.armR.rotation.x = -2.8;
      this.armR.rotation.z = -0.35 + Math.sin(this.time * 14) * 0.35;
    }
    // Body bob + lean
    this.body.position.y = Math.abs(Math.sin(this.phase)) * 0.09 * moving * (1 - air) + breathe * 0.8;
    this.body.rotation.x = P.lean;
    this.headPivot.rotation.x = -P.lean * 0.6 + Math.sin(this.time * 1.3) * 0.02 * idle;
    this.headPivot.rotation.y = Math.sin(this.time * 0.5) * 0.12 * idle;
    if (this.headFollow) { this.headFollow.rotation.copy(this.headPivot.rotation); }

    if (this.cape) this.cape.rotation.x = 0.08 + moving * (0.35 + runRatio * 0.45) + Math.sin(this.time * 6) * 0.05 * (0.3 + moving) + air * 0.4;
    if (this.wings) {
      const f = Math.sin(this.time * (air ? 14 : 2)) * (air ? 0.5 : 0.12);
      this.wings[0].rotation.y = -0.35 - f;
      this.wings[1].rotation.y = 0.35 + f;
    }
    if (this.halo) this.halo.position.y = 1.05 + Math.sin(this.time * 2) * 0.04;
  }

  doWave(seconds = 1.6) { this.wave = seconds; }
}
