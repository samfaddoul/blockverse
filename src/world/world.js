import * as THREE from 'three';
import { Batcher } from './batcher.js';
import { CollisionWorld } from './collision.js';
import { makeStudTexture, makeSmoothTexture, makeSignTexture } from './textures.js';

// Deterministic RNG so the world looks identical every time.
function rng(seed) {
  return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
}

export const ISLAND = 110;   // island spans -ISLAND..ISLAND on x and z
const TILE = 4;

export const AREAS = [
  { id: 'plaza', name: 'Spawn Plaza', x: 0, z: 0, r: 20 },
  { id: 'village', name: 'Maple Village', x: 0, z: -68, r: 32 },
  { id: 'forest', name: 'Whispering Woods', x: -72, z: -2, r: 36 },
  { id: 'lake', name: 'Crystal Lake', x: -55, z: 62, r: 28 },
  { id: 'hills', name: 'Sunny Hills', x: 58, z: 64, r: 34 },
  { id: 'obby', name: 'Sky Obby', x: 180, z: 0, r: 80 },
  { id: 'meadow', name: 'Flower Meadow', x: 62, z: -60, r: 28 },
];

const PATHS = [
  [0, 0, 0, -50, 5],
  [0, 0, 104, 0, 5],
  [0, 0, -46, 0, 4],
  [0, 0, 0, 38, 5],
  [0, 38, 40, 62, 4],
  [0, 38, -34, 52, 4],
  [0, -50, 50, -58, 3.5],
];

const LAKE = { x: -55, z: 62, rx: 20, rz: 15 };
const HILLS = [
  { x: 58, z: 66, r: 30, h: 5 },
  { x: 88, z: -88, r: 16, h: 4 },
  { x: -88, z: -86, r: 18, h: 5 },
  { x: 86, z: 30, r: 12, h: 3 },
  { x: -92, z: 92, r: 14, h: 4 },
];

function segDist(px, pz, x1, z1, x2, z2) {
  const dx = x2 - x1, dz = z2 - z1;
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (pz - z1) * dz) / (dx * dx + dz * dz)));
  return Math.hypot(px - (x1 + dx * t), pz - (z1 + dz * t));
}
export function onPath(x, z, pad = 0) {
  return PATHS.some(([x1, z1, x2, z2, w]) => segDist(x, z, x1, z1, x2, z2) < w / 2 + pad);
}
function lakeValue(x, z) { return ((x - LAKE.x) / LAKE.rx) ** 2 + ((z - LAKE.z) / LAKE.rz) ** 2; }
function hillHeight(x, z) {
  let h = 0;
  for (const hl of HILLS) {
    const d = Math.hypot(x - hl.x, z - hl.z);
    if (d < hl.r) h = Math.max(h, Math.min(hl.h, Math.floor((hl.r - d) / 4.2)));
  }
  return h;
}

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.col = new CollisionWorld();
    this.batch = new Batcher();
    this.rand = rng(1337);
    this.occupied = [];   // [x, z, r] circles used by scenery
    this.coinSpots = [];  // [x, y, z]
    this.npcSpots = {};
    this.animated = [];
    this.time = 0;

    this.studTex = makeStudTexture(renderer);
    this.smoothTex = makeSmoothTexture(renderer);
    this.studMat = new THREE.MeshStandardMaterial({ map: this.studTex, vertexColors: true, roughness: 0.82, metalness: 0 });
    this.smoothMat = new THREE.MeshStandardMaterial({ map: this.smoothTex, vertexColors: true, roughness: 0.85, metalness: 0 });

    this.buildSky();
    this.buildLights();
    this.buildIsland();
    this.buildPlaza();
    this.buildVillage();
    this.buildForest();
    this.buildLake();
    this.buildHills();
    this.buildMeadow();
    this.occupy(100, 0, 12);
    this.buildScatter();
    this.buildSigns();

    const statics = this.batch.build(this.studMat, this.smoothMat);
    scene.add(statics);
    this.buildFlowersAndGrass();
    this.buildClouds();
  }

  // ---------------- helpers ----------------
  r(a = 0, b = 1) { return a + this.rand() * (b - a); }
  isFree(x, z, r) {
    if (Math.abs(x) > ISLAND - r - 2 || Math.abs(z) > ISLAND - r - 2) return false;
    if (Math.hypot(x, z) < 22 + r) return false;
    if (onPath(x, z, r + 0.5)) return false;
    if (lakeValue(x, z) < 1.5) return false;
    for (const [ox, oz, or] of this.occupied) if (Math.hypot(x - ox, z - oz) < r + or) return false;
    return true;
  }
  occupy(x, z, r) { this.occupied.push([x, z, r]); }
  groundAt(x, z) { return hillHeight(x, z); }

  // Solid block: drawn + collidable. y is the bottom.
  block(x, y, z, w, h, d, color, opts = {}) {
    this.batch.addBox(x, y + h / 2, z, w, h, d, color, opts);
    if (opts.collide !== false) this.col.addBox(x, y + h / 2, z, w, h, d, opts.type || 'solid', opts.data || null);
  }
  deco(x, y, z, w, h, d, color, opts = {}) { this.block(x, y, z, w, h, d, color, { ...opts, collide: false }); }

  // ---------------- sky + light ----------------
  buildSky() {
    const geo = new THREE.SphereGeometry(900, 32, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        top: { value: new THREE.Color('#2f7fe0') },
        mid: { value: new THREE.Color('#7fc3ff') },
        bottom: { value: new THREE.Color('#d9f0ff') },
        sunDir: { value: new THREE.Vector3(0.45, 0.62, 0.35).normalize() },
      },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec3 sunDir; varying vec3 vDir;
        void main(){
          float h = vDir.y;
          vec3 col = h > 0.0 ? mix(mid, top, pow(clamp(h,0.0,1.0), 0.6)) : mix(mid, bottom, clamp(-h*3.0,0.0,1.0));
          col = mix(bottom, col, smoothstep(-0.05, 0.25, h) * 0.85 + 0.15);
          float s = max(dot(normalize(vDir), sunDir), 0.0);
          col += vec3(1.0,0.95,0.8) * pow(s, 900.0) * 3.0;
          col += vec3(1.0,0.9,0.6) * pow(s, 12.0) * 0.25;
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`,
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.sky.renderOrder = -1;
    this.scene.add(this.sky);
    this.scene.fog = new THREE.Fog('#cfe9ff', 140, 520);
    this.scene.background = new THREE.Color('#9fd3ff');
  }

  buildLights() {
    const hemi = new THREE.HemisphereLight('#dff1ff', '#5f8f3a', 1.05);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight('#fff4e0', 2.3);
    sun.position.set(45, 62, 35);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const S = 70;
    Object.assign(sun.shadow.camera, { left: -S, right: S, top: S, bottom: -S, near: 1, far: 240 });
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.04;
    this.scene.add(sun, sun.target);
    this.sun = sun;
    this.sunOffset = new THREE.Vector3(45, 62, 35);
    const fill = new THREE.DirectionalLight('#bcd7ff', 0.35);
    fill.position.set(-40, 30, -50);
    this.scene.add(fill);
  }

  followShadow(target) {
    // Snap to texel grid to avoid shimmering shadows while moving.
    const step = 0.5;
    const x = Math.round(target.x / step) * step, z = Math.round(target.z / step) * step;
    this.sun.target.position.set(x, target.y, z);
    this.sun.position.set(x + this.sunOffset.x, target.y + this.sunOffset.y, z + this.sunOffset.z);
  }

  // ---------------- island terrain ----------------
  buildIsland() {
    const N = (ISLAND * 2) / TILE;
    const grassA = new THREE.Color('#5cbd45'), grassB = new THREE.Color('#4ea83b'), grassC = new THREE.Color('#77c94f');
    const tmp = new THREE.Color();
    this.water = [];
    for (let i = 0; i < N; i++) {
      // run-length merged colliders per row
      let runStart = null;
      const flush = (endIdx) => {
        if (runStart === null) return;
        const x0 = -ISLAND + runStart * TILE, x1 = -ISLAND + endIdx * TILE;
        const z = -ISLAND + i * TILE + TILE / 2;
        this.col.addBox((x0 + x1) / 2, -2, z, x1 - x0, 4, TILE);
        runStart = null;
      };
      for (let j = 0; j < N; j++) {
        const x = -ISLAND + j * TILE + TILE / 2;
        const z = -ISLAND + i * TILE + TILE / 2;
        const lv = lakeValue(x, z);
        const h = hillHeight(x, z);
        if (lv < 1) {
          flush(j);
          // lake bed (shallow so you can wade)
          const depth = lv < 0.45 ? -1.0 : -0.6;
          this.block(x, depth - 3, z, TILE, 3, TILE, lv < 0.45 ? '#d8c690' : '#e3d39f', { studs: true, faces: { sides: false } });
          this.water.push([x, z]);
          continue;
        }
        if (runStart === null) runStart = j;
        // colour selection
        const n = Math.sin(x * 0.07) * Math.cos(z * 0.09) + Math.sin((x + z) * 0.031) * 0.6;
        tmp.copy(n > 0.45 ? grassC : n < -0.4 ? grassB : grassA);
        let color = '#' + tmp.getHexString();
        let jitter = 0.035;
        const r = Math.hypot(x, z);
        if (r < 17.5) { color = (Math.floor(x / TILE) + Math.floor(z / TILE)) % 2 ? '#c9ccd2' : '#b8bcc4'; jitter = 0.01; }
        else if (onPath(x, z)) { color = '#d6c29a'; jitter = 0.04; }
        else if (lv < 1.6) { color = '#e8d9a6'; jitter = 0.03; }
        const nearWater = lakeValue(x + TILE, z) < 1 || lakeValue(x - TILE, z) < 1 || lakeValue(x, z + TILE) < 1 || lakeValue(x, z - TILE) < 1;
        if (h > 0) {
          this.block(x, -2, z, TILE, h + 2, TILE, '#a06a3c', { studs: true, topColor: color, jitter, shade: 0.7 });
        } else {
          this.batch.addBox(x, -2, z, TILE, 4, TILE, nearWater ? '#a06a3c' : color, { studs: true, topColor: color, jitter, faces: { sides: nearWater } });
        }
      }
      flush(N);
    }

    // Island skirt: dirt walls with a grass lip, then stepped rock underside.
    const L = ISLAND * 2;
    const skirt = (y, h, inset, color, bottom) => {
      const s = L - inset * 2;
      this.batch.addBox(0, y + h / 2, 0, s, h, s, color, { faces: { top: false, bottom }, shade: 0.75 });
    };
    this.batch.addBox(0, -0.4, 0, L + 0.02, 0.8, L + 0.02, '#4ea83b', { faces: { top: false }, shade: 1 });
    skirt(-4, 3.2, 0, '#8a5a32', false);
    this.batch.addBox(0, -4.0, 0, L - 4, 0.01, L - 4, '#6d4527', { faces: { top: false, sides: false, bottom: true } });
    skirt(-9, 5, 4, '#7d6a5a', true);
    skirt(-15, 6, 16, '#6e625a', true);
    skirt(-22, 7, 34, '#5f5752', true);
    skirt(-28, 6, 60, '#544e4a', true);
  }

  // ---------------- spawn plaza ----------------
  buildPlaza() {
    this.occupy(0, 0, 18);
    // spawn pad
    this.block(0, 0, 8, 6, 0.4, 6, '#e8eef7', { studs: true });
    this.block(0, 0.4, 8, 4.4, 0.06, 4.4, '#1E88E5', { studs: true, collide: false });
    this.spawnPoint = new THREE.Vector3(0, 0.5, 8);
    // spawn pad logo plane
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), new THREE.MeshBasicMaterial({ map: makeSpawnLogo(), transparent: true }));
    logo.rotation.x = -Math.PI / 2; logo.position.set(0, 0.47, 8);
    this.scene.add(logo);

    // fountain
    const fx = 0, fz = -6;
    for (let a = 0; a < 16; a++) {
      const ang = (a / 16) * Math.PI * 2;
      this.block(fx + Math.cos(ang) * 4.6, 0, fz + Math.sin(ang) * 4.6, 2.0, 1.1, 1.0, '#d5d9e0', { studs: true, rot: -ang + Math.PI / 2 });
    }
    this.col.addBox(fx, 0.55, fz, 9.4, 1.1, 9.4, 'solid', { noCamera: true });
    this.deco(fx, 0, fz, 8.4, 0.3, 8.4, '#9aa3ad');
    this.block(fx, 0, fz, 1.6, 2.6, 1.6, '#cfd4dc', { studs: true });
    this.block(fx, 2.6, fz, 3.2, 0.5, 3.2, '#cfd4dc', { studs: true });
    this.block(fx, 3.1, fz, 0.8, 1.2, 0.8, '#cfd4dc', { studs: true });
    const water = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.2, 0.1, 32), new THREE.MeshStandardMaterial({ color: '#4fc3f7', transparent: true, opacity: 0.8, roughness: 0.1, metalness: 0.1 }));
    water.position.set(fx, 0.85, fz); this.scene.add(water);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 0.08, 24), water.material);
    bowl.position.set(fx, 3.05, fz); this.scene.add(bowl);
    this.fountain = this.makeFountainParticles(fx, 4.3, fz);
    this.coinSpots.push([fx, 4.9, fz]);

    // benches + lamps + planters around the ring
    for (let k = 0; k < 8; k++) {
      const ang = (k / 8) * Math.PI * 2 + Math.PI / 8;
      const x = Math.cos(ang) * 14, z = Math.sin(ang) * 14;
      if (k % 2 === 0) this.lamp(x, z);
      else this.bench(x, z, -ang - Math.PI / 2);
    }
    for (const [x, z] of [[9, 9], [-9, 9], [9, -12], [-9, -12]]) this.planter(x, z);
    // coin ring around plaza
    for (let k = 0; k < 8; k++) {
      if (k === 2) continue; // that spot would sit on the spawn pad
      const a = (k / 8) * Math.PI * 2;
      this.coinSpots.push([Math.cos(a) * 11, 1.4, Math.sin(a) * 11]);
    }
    this.npcSpots.plaza = [[6, 2], [-7, 3], [4, -14]];
  }

  makeFountainParticles(x, y, z) {
    const COUNT = 120;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(COUNT * 3);
    const vel = [];
    for (let i = 0; i < COUNT; i++) { pos.set([x, y, z], i * 3); vel.push([0, 0, 0, Math.random() * 1.4]); }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: '#bfeaff', size: 0.22, transparent: true, opacity: 0.85 }));
    this.scene.add(pts);
    const f = { pts, vel, x, y, z };
    this.animated.push((dt) => {
      for (let i = 0; i < COUNT; i++) {
        const v = vel[i];
        v[3] -= dt;
        if (v[3] <= 0) {
          const a = Math.random() * Math.PI * 2, s = 1.0 + Math.random() * 0.8;
          v[0] = Math.cos(a) * s; v[1] = 4 + Math.random() * 1.5; v[2] = Math.sin(a) * s; v[3] = 1.2 + Math.random() * 0.3;
          pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
        }
        v[1] -= 9.8 * dt;
        pos[i * 3] += v[0] * dt; pos[i * 3 + 1] += v[1] * dt; pos[i * 3 + 2] += v[2] * dt;
        if (pos[i * 3 + 1] < 0.9) v[3] = 0;
      }
      geo.attributes.position.needsUpdate = true;
    });
    return f;
  }

  lamp(x, z) {
    this.block(x, 0, z, 0.5, 0.3, 0.5, '#37474f');
    this.block(x, 0.3, z, 0.25, 3.4, 0.25, '#455a64');
    this.deco(x, 3.7, z, 0.8, 0.12, 0.8, '#37474f');
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.6, 0.55), new THREE.MeshStandardMaterial({ color: '#fff3c4', emissive: '#ffd54f', emissiveIntensity: 0.9 }));
    bulb.position.set(x, 3.52, z); this.scene.add(bulb);
    this.deco(x, 3.82, z, 0.5, 0.18, 0.5, '#37474f');
  }

  bench(x, z, rot) {
    const c = Math.cos(rot), s = Math.sin(rot);
    const at = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
    for (const lx of [-1.1, 1.1]) { const [px, pz] = at(lx, 0); this.deco(px, 0, pz, 0.25, 0.55, 0.8, '#5d4037', { rot }); }
    this.deco(x, 0.55, z, 3, 0.18, 0.95, '#a1673a', { rot });
    const [bx, bz] = at(0, -0.42);
    this.deco(bx, 0.73, bz, 3, 0.7, 0.14, '#a1673a', { rot });
    this.col.addBox(x, 0.4, z, 2.6, 0.8, 2.6);
  }

  planter(x, z) {
    this.block(x, 0, z, 3, 0.9, 3, '#8d6e63', { studs: true });
    this.deco(x, 0.9, z, 2.6, 0.12, 2.6, '#5d4037');
    const cols = ['#f06292', '#ffd54f', '#ba68c8', '#ff8a65'];
    for (let i = 0; i < 9; i++) {
      const px = x - 0.8 + (i % 3) * 0.8, pz = z - 0.8 + Math.floor(i / 3) * 0.8;
      this.deco(px, 1.0, pz, 0.12, 0.45, 0.12, '#388e3c');
      this.deco(px, 1.4, pz, 0.38, 0.3, 0.38, cols[i % 4]);
    }
  }

  // ---------------- village ----------------
  buildVillage() {
    const cx = 0, cz = -68;
    this.occupy(cx, cz, 30);
    // village green + well
    this.block(cx, 0, cz, 3.4, 1.2, 3.4, '#9e9e9e', { studs: true });
    this.deco(cx, 1.2, cz, 2.6, 0.05, 2.6, '#29b6f6');
    for (const sx of [-1.4, 1.4]) this.deco(cx + sx, 1.2, cz, 0.3, 2.2, 0.3, '#6d4c41');
    this.deco(cx, 3.4, cz, 4.2, 0.3, 2.4, '#c62828', { studs: true });
    this.deco(cx, 3.7, cz, 3.2, 0.3, 1.8, '#c62828', { studs: true });

    const houses = [
      { x: -20, z: -58, rot: 0, wall: '#f3e5c8', roof: '#d84315' },
      { x: 20, z: -58, rot: 0, wall: '#d7ecff', roof: '#1565c0' },
      { x: -22, z: -82, rot: 0, wall: '#ffe0e9', roof: '#8e24aa' },
      { x: 22, z: -82, rot: 0, wall: '#e6f5d6', roof: '#2e7d32' },
      { x: 0, z: -92, rot: 0, wall: '#fff3c4', roof: '#6d4c41', big: true },
    ];
    for (const h of houses) this.house(h);
    // market stalls
    this.stall(-9, -48, '#e53935');
    this.stall(9, -48, '#1e88e5');
    // fences around green
    for (let i = -3; i <= 3; i++) {
      if (Math.abs(i) <= 1) continue;
      this.fence(cx + i * 2.2, cz + 8, 0); this.fence(cx + i * 2.2, cz - 8, 0);
    }
    // crates & barrels
    for (const [x, z] of [[-13, -50], [-12, -51.5], [13, -51], [14, -49.5]]) this.block(x, 0, z, 1.2, 1.2, 1.2, '#a1887f', { rot: this.r(0, 0.5) });
    for (const [x, z] of [[27, -66], [-28, -70], [7, -98]]) {
      this.block(x, 0, z, 1.1, 1.5, 1.1, '#795548', { rot: 0.785 });
      this.deco(x, 0.6, z, 1.2, 0.12, 1.2, '#424242', { rot: 0.785 });
    }
    for (const [x, z] of [[-11, -62], [11, -62], [-11, -76], [11, -76]]) this.lamp(x, z);
    for (const [x, z] of [[-6, -86], [6, -86], [-30, -50], [30, -50]]) this.tree(x, z, 'cherry');
    this.coinSpots.push([cx, 4.6, cz], [-20, 8.7, -58], [20, 8.7, -58], [0, 11, -92], [-9, 4.6, -48], [9, 4.6, -48]);
    this.npcSpots.village = [[-6, -62], [8, -70], [-4, -78], [12, -56], [0, -54]];
  }

  house({ x, z, wall, roof, big }) {
    const w = big ? 12 : 9, d = big ? 9 : 8, h = big ? 6 : 4.6;
    this.occupy(x, z, Math.max(w, d) * 0.7);
    this.block(x, 0, z, w + 0.6, 0.4, d + 0.6, '#9e9e9e', { studs: true });
    this.block(x, 0.4, z, w, h, d, wall);
    // corner beams
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) this.deco(x + sx * (w / 2), 0.4, z + sz * (d / 2), 0.5, h, 0.5, '#6d4c41');
    // door (front faces +z towards village centre? we put doors facing the village green)
    const dz = z < -68 ? z + d / 2 : z - d / 2; // face the green
    const front = z < -68 ? 1 : -1;
    this.deco(x, 0.4, dz + front * 0.06, 1.6, 2.6, 0.14, '#5d4037');
    this.deco(x + 0.5, 1.6, dz + front * 0.14, 0.15, 0.15, 0.08, '#ffca28');
    // windows
    const win = new THREE.MeshStandardMaterial({ color: '#b3e5fc', emissive: '#4fc3f7', emissiveIntensity: 0.25, roughness: 0.1 });
    for (const sx of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 0.12), win);
      m.position.set(x + sx * (w / 4 + 0.6), 0.4 + h * 0.58, dz + front * 0.07); this.scene.add(m);
      this.deco(x + sx * (w / 4 + 0.6), 0.4 + h * 0.58 - 0.85, dz + front * 0.18, 2, 0.2, 0.3, '#6d4c41');
      this.deco(x + sx * (w / 4 + 0.6), 0.4 + h * 0.58 - 0.65, dz + front * 0.26, 1.7, 0.3, 0.25, '#e91e63');
    }
    // stepped blocky roof
    const layers = big ? 5 : 4;
    for (let i = 0; i < layers; i++) {
      const ry = 0.4 + h + i * 0.7;
      this.block(x, ry, z, w + 1.4 - i * (w / layers), 0.7, d + 1.4, roof, { studs: true });
    }
    this.block(x + w / 4, 0.4 + h, z - d / 4, 1, 3.6, 1, '#8d6e63');
    // stacked crates up the side of the house lead to the roof
    const roofTop = 0.4 + h + 0.7;
    const n = Math.ceil(roofTop - 1.0);
    const cx = x - (w / 2 + 0.7 + 0.62);
    for (let k = 0; k < n; k++) {
      const cz = z + d / 2 - 0.6 - k * 1.22;
      for (let j = 0; j <= k; j++) this.block(cx, j, cz, 1.2, 1.0, 1.2, j % 2 ? '#b08a62' : '#a1774f', { studs: true });
    }
    this.occupy(cx, z, 3);
  }

  stall(x, z, color) {
    this.occupy(x, z, 3.5);
    this.block(x, 0, z, 4.4, 1.2, 1.6, '#a1673a', { studs: true });
    for (const sx of [-2, 2]) this.deco(x + sx, 1.2, z - 0.6, 0.25, 2.4, 0.25, '#6d4c41');
    for (let i = 0; i < 6; i++) this.deco(x - 2.2 + i * 0.8 + 0.4, 3.6, z - 0.4, 0.8, 0.3, 2.6, i % 2 ? '#ffffff' : color);
    const fruit = ['#e53935', '#fdd835', '#7cb342', '#ff7043'];
    for (let i = 0; i < 4; i++) this.deco(x - 1.5 + i, 1.2, z + 0.1, 0.7, 0.4, 0.7, fruit[i], { studs: true });
  }

  fence(x, z, rot) {
    this.block(x, 0, z, 0.3, 1.4, 0.3, '#efebe9');
    this.deco(x, 0.5, z, 2.2, 0.18, 0.12, '#efebe9', { rot });
    this.deco(x, 1.0, z, 2.2, 0.18, 0.12, '#efebe9', { rot });
  }

  // ---------------- trees ----------------
  tree(x, z, type = 'oak', scale = 1) {
    const gy = this.groundAt(x, z);
    this.occupy(x, z, 2.5 * scale);
    const s = scale;
    const leafOpts = { jitter: 0.06 };
    if (type === 'pine') {
      this.block(x, gy, z, 0.9 * s, 3 * s, 0.9 * s, '#6d4c41');
      const tiers = [[4.2, 2], [3.2, 1.8], [2.2, 1.6], [1.1, 1.2]];
      let y = gy + 2.2 * s;
      tiers.forEach(([w, h], i) => {
        this.block(x, y, z, w * s, h * s, w * s, i % 2 ? '#2e7d32' : '#357a38', leafOpts);
        y += h * s * 0.85;
      });
      return y;
    }
    const trunk = type === 'birch' ? '#efebe9' : '#7a5232';
    const leaves = { oak: ['#43a047', '#4caf50'], birch: ['#9ccc65', '#aed581'], cherry: ['#f48fb1', '#f8bbd0'], autumn: ['#fb8c00', '#ffa726'] }[type];
    const th = (type === 'birch' ? 4.5 : 3.6) * s;
    this.block(x, gy, z, 0.9 * s, th, 0.9 * s, trunk);
    if (type === 'birch') for (let i = 0; i < 4; i++) this.deco(x + 0.46 * s, gy + 0.6 + i * 0.9 * s, z, 0.04, 0.2, 0.5 * s, '#424242');
    const ly = gy + th - 0.6 * s;
    this.block(x, ly, z, 4.2 * s, 2.4 * s, 4.2 * s, leaves[0], leafOpts);
    this.block(x, ly + 2.4 * s, z, 2.8 * s, 1.4 * s, 2.8 * s, leaves[1], leafOpts);
    // a couple of offset leaf clusters for a more organic silhouette
    const ox = this.r(-1, 1) * s, oz = this.r(-1, 1) * s;
    this.deco(x + ox + 1.4 * s, ly + 0.5 * s, z + oz, 1.6 * s, 1.6 * s, 1.6 * s, leaves[1], { jitter: 0.06 });
    this.deco(x - ox - 1.2 * s, ly + 0.9 * s, z - oz - 0.8 * s, 1.4 * s, 1.4 * s, 1.4 * s, leaves[0], { jitter: 0.06 });
    if (type === 'cherry' || type === 'oak') {
      for (let i = 0; i < 3; i++) this.deco(x + this.r(-1.8, 1.8) * s, ly + this.r(0.6, 2.2) * s, z + 2.12 * s, 0.3, 0.3, 0.06, type === 'oak' ? '#e53935' : '#ffffff', {});
    }
    return ly + 3.8 * s;
  }

  // ---------------- forest ----------------
  buildForest() {
    const types = ['oak', 'pine', 'pine', 'birch', 'oak', 'autumn'];
    let placed = 0;
    for (let tries = 0; tries < 900 && placed < 70; tries++) {
      const x = this.r(-106, -34), z = this.r(-48, 40);
      const s = this.r(0.85, 1.3);
      if (!this.isFree(x, z, 3.2 * s)) continue;
      const top = this.tree(x, z, types[Math.floor(this.r(0, types.length))], s);
      if (placed % 9 === 0) this.coinSpots.push([x, top + 1.2, z]);
      placed++;
    }
    // mushrooms, logs, stumps
    for (let i = 0; i < 26; i++) {
      const x = this.r(-104, -36), z = this.r(-46, 40);
      if (!this.isFree(x, z, 1.2)) continue;
      this.occupy(x, z, 1.2);
      if (i % 3 === 0) {
        const s = this.r(0.8, 1.6);
        this.block(x, 0, z, 0.45 * s, 0.9 * s, 0.45 * s, '#f5f5f5');
        this.block(x, 0.9 * s, z, 1.5 * s, 0.6 * s, 1.5 * s, '#e53935', { studs: true });
        this.deco(x + 0.35 * s, 1.5 * s, z + 0.2 * s, 0.3 * s, 0.05, 0.3 * s, '#ffffff');
        this.deco(x - 0.3 * s, 1.5 * s, z - 0.35 * s, 0.25 * s, 0.05, 0.25 * s, '#ffffff');
      } else if (i % 3 === 1) {
        const rot = this.r(0, Math.PI);
        this.deco(x, 0, z, 4, 0.9, 0.9, '#6d4c41', { rot });
        this.col.addBox(x, 0.45, z, 2.5, 0.9, 2.5);
        this.deco(x, 0.9, z, 0.5, 0.25, 0.5, '#7cb342', { rot });
      } else {
        this.block(x, 0, z, 1.3, 0.8, 1.3, '#795548', { studs: true, topColor: '#d7b98a' });
      }
    }
    // campfire clearing
    const cx = -70, cz = 6;
    this.occupy(cx, cz, 6);
    for (let a = 0; a < 8; a++) {
      const ang = (a / 8) * Math.PI * 2;
      this.block(cx + Math.cos(ang) * 1.6, 0, cz + Math.sin(ang) * 1.6, 0.7, 0.45, 0.7, '#90a4ae', { rot: ang });
    }
    this.deco(cx, 0, cz, 1.8, 0.35, 0.4, '#5d4037', { rot: 0.6 });
    this.deco(cx, 0.1, cz, 1.8, 0.35, 0.4, '#5d4037', { rot: -0.6 });
    const fire = new THREE.Group();
    const fm1 = new THREE.MeshStandardMaterial({ color: '#ff9800', emissive: '#ff6d00', emissiveIntensity: 1.6 });
    const fm2 = new THREE.MeshStandardMaterial({ color: '#ffeb3b', emissive: '#ffc107', emissiveIntensity: 1.8 });
    const flames = [];
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.8, 0.45), i % 2 ? fm2 : fm1);
      m.position.set(Math.cos(i * 1.3) * 0.3, 0.6, Math.sin(i * 1.3) * 0.3);
      fire.add(m); flames.push(m);
    }
    fire.position.set(cx, 0, cz); this.scene.add(fire);
    const fl = new THREE.PointLight('#ff9800', 18, 14, 2); fl.position.set(cx, 1.6, cz); this.scene.add(fl);
    this.animated.push((dt, t) => {
      flames.forEach((m, i) => { const k = 0.7 + Math.sin(t * 9 + i * 2.1) * 0.3; m.scale.set(1, k * 1.2, 1); m.position.y = 0.3 + k * 0.45; m.rotation.y = t * 2 + i; });
      fl.intensity = 16 + Math.sin(t * 13) * 3;
    });
    for (const [lx, lz, r] of [[-66, 9, 0.3], [-74, 3, 1.8]]) this.deco(lx, 0, lz, 2.4, 0.6, 0.6, '#6d4c41', { rot: r });
    this.coinSpots.push([cx, 1.6, cz + 3.5], [cx + 3.5, 1.6, cz]);
    this.npcSpots.forest = [[-64, 4], [-78, 12]];
  }

  // ---------------- lake ----------------
  buildLake() {
    const geo = new THREE.PlaneGeometry(LAKE.rx * 2 + 4, LAKE.rz * 2 + 4, 1, 1);
    const tex = this.smoothTex.clone(); tex.repeat.set(6, 5); tex.needsUpdate = true;
    const mat = new THREE.MeshStandardMaterial({ color: '#3fb6ea', transparent: true, opacity: 0.72, roughness: 0.05, metalness: 0.2, map: tex });
    const w = new THREE.Mesh(geo, mat);
    w.rotation.x = -Math.PI / 2; w.position.set(LAKE.x, -0.28, LAKE.z);
    w.receiveShadow = true;
    this.scene.add(w);
    this.animated.push((dt, t) => { tex.offset.set(t * 0.02, Math.sin(t * 0.3) * 0.05); });
    // dock
    const dx = LAKE.x + 6, dz = LAKE.z - LAKE.rz + 1;
    for (let i = 0; i < 6; i++) this.block(dx, -0.05, dz + i * 1.5, 2.6, 0.3, 1.4, i % 2 ? '#a1673a' : '#8d5a2e', { studs: true });
    for (const sx of [-1.3, 1.3]) for (const k of [2, 5]) this.deco(dx + sx, -1.2, dz + k * 1.5, 0.3, 1.8, 0.3, '#5d4037');
    this.coinSpots.push([dx, 1.3, dz + 8.5]);
    // lily pads + a little island with a tree
    const lilies = [[-60, 58], [-50, 66], [-62, 68], [-46, 58], [-57, 54]];
    for (const [x, z] of lilies) {
      this.block(x, -0.32, z, 1.6, 0.12, 1.6, '#66bb6a', { studs: true, rot: x * z });
      this.coinSpots.push([x, 1.1, z]);
    }
    this.block(LAKE.x - 6, -1, LAKE.z + 4, 6, 1.4, 6, '#e3d39f', { studs: true, topColor: '#7cc957' });
    this.tree(LAKE.x - 6, LAKE.z + 4, 'cherry', 0.9);
    this.npcSpots.lake = [[-40, 46], [-30, 60]];
  }

  // ---------------- hills ----------------
  buildHills() {
    const big = HILLS[0];
    // lookout tower on the top of the big hill
    const tx = big.x, tz = big.z, gy = big.h;
    this.occupy(tx, tz, 7);
    this.block(tx, gy, tz, 3, 9, 3, '#bcaaa4', { studs: true });
    // spiral stairs around the tower
    for (let i = 0; i < 16; i++) {
      const s = i * 1.8 + 5.2, side = Math.floor(s / 9.2), u = (s % 9.2) - 4.6;
      const [sx, sz] = [[u, -4.6], [4.6, u], [-u, 4.6], [-4.6, -u]][side];
      this.block(tx + sx, gy + i * 0.6, tz + sz, 2.2, 0.5, 2.2, i % 2 ? '#8d6e63' : '#a1887f', { studs: true });
    }
    this.block(tx, gy + 9, tz, 7, 0.6, 7, '#8d6e63', { studs: true });
    for (const [sx, sz] of [[-3.3, -3.3], [3.3, -3.3], [-3.3, 3.3], [3.3, 3.3]]) this.block(tx + sx, gy + 9.6, tz + sz, 0.4, 1.2, 0.4, '#5d4037');
    this.block(tx, gy + 12.6, tz, 8, 0.5, 8, '#e53935', { studs: true });
    this.block(tx, gy + 13.1, tz, 5, 0.5, 5, '#e53935', { studs: true });
    for (const [sx, sz] of [[-3.3, -3.3], [3.3, -3.3], [-3.3, 3.3], [3.3, 3.3]]) this.deco(tx + sx, gy + 10.8, tz + sz, 0.3, 1.8, 0.3, '#5d4037');
    this.coinSpots.push([tx, gy + 10.8, tz], [tx + 1.5, gy + 10.8, tz + 1.5], [tx - 1.5, gy + 10.8, tz - 1.5]);
    // coins along the hillsides
    for (const hl of HILLS) {
      this.coinSpots.push([hl.x + hl.r * 0.45, hillHeight(hl.x + hl.r * 0.45, hl.z) + 1.3, hl.z]);
      if (hl !== big) this.coinSpots.push([hl.x, hl.h + 1.3, hl.z]);
    }
    // sprinkle pines and rocks on hills
    for (let i = 0; i < 40; i++) {
      const hl = HILLS[i % HILLS.length];
      const a = this.r(0, Math.PI * 2), d = this.r(0.35, 0.95) * hl.r;
      const x = hl.x + Math.cos(a) * d, z = hl.z + Math.sin(a) * d;
      if (!this.isFree(x, z, 3)) continue;
      if (i % 3 === 0) this.rock(x, z, this.r(0.8, 1.6));
      else this.tree(x, z, i % 2 ? 'pine' : 'oak', this.r(0.8, 1.1));
    }
    this.npcSpots.hills = [[40, 52], [70, 80]];
  }

  rock(x, z, s) {
    const gy = this.groundAt(x, z);
    this.occupy(x, z, 2 * s);
    const rot = this.r(0, Math.PI);
    this.block(x, gy, z, 2.2 * s, 1.4 * s, 1.8 * s, '#9e9e9e', { rot, jitter: 0.08 });
    this.deco(x + 0.4 * s, gy + 1.2 * s, z - 0.2 * s, 1.3 * s, 0.8 * s, 1.1 * s, '#bdbdbd', { rot: rot + 0.4, jitter: 0.08 });
    this.deco(x - 1.1 * s, gy, z + 0.6 * s, 0.9 * s, 0.6 * s, 0.9 * s, '#8a8a8a', { rot: rot + 1, jitter: 0.08 });
  }

  // ---------------- flower meadow ----------------
  buildMeadow() {
    const cx = 62, cz = -60;
    // windmill
    this.occupy(cx + 10, cz - 6, 6);
    const wx = cx + 10, wz = cz - 6;
    this.block(wx, 0, wz, 5, 8, 5, '#fafafa', { studs: true });
    this.block(wx, 8, wz, 5.8, 1, 5.8, '#c62828', { studs: true });
    this.block(wx, 9, wz, 4, 1, 4, '#c62828', { studs: true });
    this.block(wx, 10, wz, 2, 1, 2, '#c62828', { studs: true });
    this.deco(wx, 0, wz + 2.52, 1.4, 2.2, 0.1, '#5d4037');
    const blades = new THREE.Group();
    const bm = new THREE.MeshStandardMaterial({ color: '#efebe9', roughness: 0.8 });
    const fm = new THREE.MeshStandardMaterial({ color: '#8d6e63', roughness: 0.8 });
    for (let i = 0; i < 4; i++) {
      const arm = new THREE.Group(); arm.rotation.z = (i * Math.PI) / 2;
      const a = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5.5, 0.2), fm); a.position.y = 2.9; a.castShadow = true;
      const b = new THREE.Mesh(new THREE.BoxGeometry(1.4, 4.2, 0.1), bm); b.position.set(0.85, 3.4, 0); b.castShadow = true;
      arm.add(a, b); blades.add(arm);
    }
    const hub = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), fm); blades.add(hub);
    blades.position.set(wx, 6.5, wz + 2.9);
    this.scene.add(blades);
    this.animated.push((dt) => { blades.rotation.z += dt * 0.6; });
    // beehive boxes + hay
    for (const [x, z] of [[cx - 8, cz + 6], [cx - 10, cz + 4]]) {
      this.block(x, 0, z, 1.4, 1.6, 1.4, '#ffd54f', { studs: true });
      this.deco(x, 1.6, z, 1.7, 0.25, 1.7, '#8d6e63');
    }
    for (const [x, z] of [[cx + 4, cz + 10], [cx + 6, cz + 9]]) this.block(x, 0, z, 2, 1.4, 1.4, '#e6c25a', { studs: true });
    for (let k = 0; k < 3; k++) for (let j = 0; j <= k; j++) this.block(wx - 3.4, j * 1.6, wz + 4.6 - k * 1.7, 1.6, 1.6, 1.6, j % 2 ? '#b08a62' : '#a1774f', { studs: true });
    this.coinSpots.push([wx, 11.6, wz], [cx - 9, 2.6, cz + 5], [cx, 1.3, cz], [cx + 5, 2.4, cz + 9.5]);
    this.npcSpots.meadow = [[cx - 2, cz + 2], [cx + 4, cz - 10]];
    this.meadow = { x: cx, z: cz };
  }

  // ---------------- scattered decoration ----------------
  buildScatter() {
    let n = 0;
    for (let i = 0; i < 260 && n < 60; i++) {
      const x = this.r(-105, 105), z = this.r(-105, 105);
      if (x < -34 && z > -48 && z < 40) continue; // forest handled already
      if (!this.isFree(x, z, 3)) continue;
      const k = this.rand();
      if (k < 0.45) this.tree(x, z, k < 0.15 ? 'birch' : k < 0.3 ? 'oak' : 'pine', this.r(0.85, 1.2));
      else if (k < 0.7) this.rock(x, z, this.r(0.6, 1.3));
      else {
        // bush
        const gy = this.groundAt(x, z);
        this.occupy(x, z, 1.6);
        this.block(x, gy, z, 2, 1.3, 2, '#43a047', { jitter: 0.08 });
        this.deco(x + 0.5, gy + 0.6, z + 0.3, 1.3, 1.1, 1.3, '#66bb6a', { jitter: 0.08 });
      }
      n++;
    }
    // coins along the main paths
    for (let i = 1; i <= 5; i++) this.coinSpots.push([16 + i * 14, 1.3, 0]);
    for (let i = 1; i <= 3; i++) this.coinSpots.push([0, 1.3, -18 - i * 8]);
    for (let i = 1; i <= 3; i++) this.coinSpots.push([-16 - i * 8, 1.3, 0]);
    for (let i = 1; i <= 2; i++) this.coinSpots.push([0, 1.3, 18 + i * 8]);
  }

  buildSigns() {
    const sign = (x, z, rot, text, opts) => {
      this.block(x, 0, z, 0.3, 2.4, 0.3, '#6d4c41');
      const m = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.0), new THREE.MeshStandardMaterial({ map: makeSignTexture(text, opts), roughness: 0.7 }));
      m.position.set(x, 2.3, z); m.rotation.y = rot; this.scene.add(m);
      const back = new THREE.Mesh(new THREE.BoxGeometry(3.3, 1.1, 0.1), new THREE.MeshStandardMaterial({ color: '#4e342e' }));
      back.position.set(x, 2.3, z); back.rotation.y = rot; back.translateZ(-0.07); back.castShadow = true; this.scene.add(back);
    };
    sign(5, -20, 0, 'VILLAGE ▲', { accent: '#ff7043' });
    sign(20, 4.5, 0, 'SKY OBBY ►', { accent: '#ffcc33', bg: '#c62828' });
    sign(-20, 4.5, 0, '◄ WOODS', { accent: '#7cb342' });
    sign(5, 22, Math.PI, 'HILLS & LAKE ▼', { accent: '#29b6f6' });
  }

  // ---------------- instanced flowers + grass tufts ----------------
  buildFlowersAndGrass() {
    const dummy = new THREE.Object3D();
    const col = new THREE.Color();
    const flowerCols = ['#ff5252', '#ffd740', '#e040fb', '#ffffff', '#40c4ff', '#ff6e40', '#f48fb1'];
    const spots = [];
    const R = rng(99);
    for (let i = 0; i < 9000 && spots.length < 1400; i++) {
      const x = (R() * 2 - 1) * (ISLAND - 3), z = (R() * 2 - 1) * (ISLAND - 3);
      const nearMeadow = this.meadow && Math.hypot(x - this.meadow.x, z - this.meadow.z) < 24;
      if (!nearMeadow && R() < 0.55) continue;
      if (Math.hypot(x, z) < 18 || onPath(x, z, 0.6) || lakeValue(x, z) < 1.3) continue;
      if (this.occupied.some(([ox, oz, or]) => Math.hypot(x - ox, z - oz) < or * 0.7)) continue;
      spots.push([x, z, nearMeadow]);
    }
    const stemGeo = new THREE.BoxGeometry(0.08, 0.5, 0.08);
    const headGeo = new THREE.BoxGeometry(0.3, 0.22, 0.3);
    const flowers = spots.filter((s, i) => s[2] || i % 3 === 0);
    const stems = new THREE.InstancedMesh(stemGeo, new THREE.MeshStandardMaterial({ color: '#2e7d32' }), flowers.length);
    const heads = new THREE.InstancedMesh(headGeo, new THREE.MeshStandardMaterial({ roughness: 0.6 }), flowers.length);
    flowers.forEach(([x, z], i) => {
      const gy = hillHeight(x, z);
      const s = 0.8 + R() * 0.6;
      dummy.position.set(x, gy + 0.25 * s, z); dummy.scale.set(1, s, 1); dummy.rotation.set(0, R() * 3, 0); dummy.updateMatrix();
      stems.setMatrixAt(i, dummy.matrix);
      dummy.position.y = gy + 0.55 * s; dummy.scale.set(1, 1, 1); dummy.updateMatrix();
      heads.setMatrixAt(i, dummy.matrix);
      heads.setColorAt(i, col.set(flowerCols[Math.floor(R() * flowerCols.length)]));
    });
    stems.castShadow = heads.castShadow = true;
    this.scene.add(stems, heads);

    // grass tufts
    const tuftGeo = new THREE.BoxGeometry(0.1, 0.5, 0.1);
    const tufts = new THREE.InstancedMesh(tuftGeo, new THREE.MeshStandardMaterial({ roughness: 0.9 }), 2400);
    let t = 0;
    for (let i = 0; i < 12000 && t < 2400; i++) {
      const x = (R() * 2 - 1) * (ISLAND - 2), z = (R() * 2 - 1) * (ISLAND - 2);
      if (Math.hypot(x, z) < 18 || onPath(x, z, 0.3) || lakeValue(x, z) < 1.4) continue;
      const gy = hillHeight(x, z);
      for (let b = 0; b < 3 && t < 2400; b++) {
        dummy.position.set(x + (b - 1) * 0.14, gy + 0.2, z + (R() - 0.5) * 0.15);
        dummy.rotation.set((R() - 0.5) * 0.5, R() * 3, (b - 1) * 0.35);
        dummy.scale.set(1, 0.6 + R() * 0.7, 1);
        dummy.updateMatrix();
        tufts.setMatrixAt(t, dummy.matrix);
        tufts.setColorAt(t, col.set(R() < 0.5 ? '#4caf50' : '#66bb6a'));
        t++;
      }
    }
    tufts.count = t;
    tufts.receiveShadow = true;
    this.scene.add(tufts);
  }

  buildClouds() {
    this.clouds = [];
    const mat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, emissive: '#ffffff', emissiveIntensity: 0.35, transparent: true, opacity: 0.95 });
    const R = rng(5);
    for (let i = 0; i < 22; i++) {
      const g = new THREE.Group();
      const parts = 3 + Math.floor(R() * 4);
      for (let p = 0; p < parts; p++) {
        const w = 8 + R() * 12, h = 3 + R() * 3, d = 6 + R() * 8;
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        m.position.set((p - parts / 2) * 6 + R() * 3, R() * 2, R() * 6 - 3);
        g.add(m);
      }
      g.position.set((R() * 2 - 1) * 400, 70 + R() * 40, (R() * 2 - 1) * 400);
      g.userData.speed = 1 + R() * 2;
      this.scene.add(g);
      this.clouds.push(g);
    }
  }

  update(dt, t) {
    this.time = t;
    for (const c of this.clouds) {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 450) c.position.x = -450;
    }
    for (const f of this.animated) f(dt, t);
  }

  areaAt(x, z) {
    for (const a of AREAS) if (Math.hypot(x - a.x, z - a.z) < a.r) return a;
    return null;
  }
}

function makeSpawnLogo() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  g.strokeStyle = '#ffffff'; g.lineWidth = 18;
  g.beginPath(); g.arc(128, 128, 96, 0, Math.PI * 2); g.stroke();
  g.fillStyle = '#ffffff';
  g.save(); g.translate(128, 128); g.rotate(Math.PI / 12);
  g.beginPath(); g.roundRect(-46, -46, 92, 92, 14); g.fill();
  g.fillStyle = '#1E88E5';
  g.beginPath(); g.roundRect(-14, -14, 28, 28, 4); g.fill();
  g.restore();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
