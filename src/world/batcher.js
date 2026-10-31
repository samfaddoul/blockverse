import * as THREE from 'three';

// Builds all static scenery into a handful of merged, vertex-coloured meshes.
// Top faces can use the studded material; everything else uses the smooth one.
// This keeps draw calls tiny even with thousands of blocks in the world.

const STUD = 2;     // stud texture repeats per world unit (1 stud = 0.5 units)
const SMOOTH = 0.35;

class Bucket {
  constructor() { this.pos = []; this.nrm = []; this.uv = []; this.col = []; this.idx = []; }
  get vcount() { return this.pos.length / 3; }
  toGeometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nrm, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.idx);
    g.computeBoundingSphere();
    return g;
  }
}

const _c = new THREE.Color();

export class Batcher {
  constructor() {
    this.studs = new Bucket();
    this.smooth = new Bucket();
  }

  // Box centred at (x, y, z) with size (w, h, d).
  // opts: studs (bool) top face studded, rot (yaw radians), shade (side darkening at the base),
  //       faces: { top, bottom, sides } toggles, topColor (different top colour)
  addBox(x, y, z, w, h, d, color, opts = {}) {
    const { studs = false, rot = 0, shade = 0.78, faces = {}, topColor = null, jitter = 0 } = opts;
    const cos = Math.cos(rot), sin = Math.sin(rot);
    const hw = w / 2, hh = h / 2, hd = d / 2;
    _c.set(color);
    if (jitter) _c.offsetHSL(0, 0, (Math.random() - 0.5) * jitter);
    const base = [_c.r, _c.g, _c.b];
    let top = base;
    if (topColor) { const t = new THREE.Color(topColor); if (jitter) t.offsetHSL(0, 0, (Math.random() - 0.5) * jitter); top = [t.r, t.g, t.b]; }

    const tf = (lx, ly, lz) => [x + lx * cos + lz * sin, y + ly, z - lx * sin + lz * cos];
    const rn = (nx, ny, nz) => [nx * cos + nz * sin, ny, -nx * sin + nz * cos];

    const face = (bucket, corners, normal, colors, uvFn) => {
      const start = bucket.vcount;
      const n = rn(...normal);
      corners.forEach((c, i) => {
        const p = tf(...c);
        bucket.pos.push(...p);
        bucket.nrm.push(...n);
        bucket.uv.push(...uvFn(p, c));
        bucket.col.push(...colors[i]);
      });
      bucket.idx.push(start, start + 1, start + 2, start, start + 2, start + 3);
    };
    const mul = (c, m) => [c[0] * m, c[1] * m, c[2] * m];
    const sideCols = [mul(base, shade), mul(base, shade), base, base]; // bottom, bottom, top, top
    const showTop = faces.top !== false, showBottom = faces.bottom === true, showSides = faces.sides !== false;

    // top (+y)
    if (showTop) {
      const b = studs ? this.studs : this.smooth;
      const s = studs ? STUD : SMOOTH;
      face(b, [[-hw, hh, hd], [hw, hh, hd], [hw, hh, -hd], [-hw, hh, -hd]], [0, 1, 0], [top, top, top, top],
        (p) => [p[0] * s, -p[2] * s]);
    }
    if (showBottom) {
      face(this.smooth, [[-hw, -hh, -hd], [hw, -hh, -hd], [hw, -hh, hd], [-hw, -hh, hd]], [0, -1, 0],
        [mul(base, 0.6), mul(base, 0.6), mul(base, 0.6), mul(base, 0.6)], (p) => [p[0] * SMOOTH, p[2] * SMOOTH]);
    }
    if (!showSides) return;
    const S = SMOOTH;
    // +z
    face(this.smooth, [[-hw, -hh, hd], [hw, -hh, hd], [hw, hh, hd], [-hw, hh, hd]], [0, 0, 1], sideCols,
      (p, c) => [(c[0] + x) * S, p[1] * S]);
    // -z
    face(this.smooth, [[hw, -hh, -hd], [-hw, -hh, -hd], [-hw, hh, -hd], [hw, hh, -hd]], [0, 0, -1], sideCols,
      (p, c) => [(-c[0] + x) * S, p[1] * S]);
    // +x
    face(this.smooth, [[hw, -hh, hd], [hw, -hh, -hd], [hw, hh, -hd], [hw, hh, hd]], [1, 0, 0], sideCols,
      (p, c) => [(-c[2] + z) * S, p[1] * S]);
    // -x
    face(this.smooth, [[-hw, -hh, -hd], [-hw, -hh, hd], [-hw, hh, hd], [-hw, hh, -hd]], [-1, 0, 0], sideCols,
      (p, c) => [(c[2] + z) * S, p[1] * S]);
  }

  build(studMat, smoothMat) {
    const group = new THREE.Group();
    for (const [bucket, mat] of [[this.studs, studMat], [this.smooth, smoothMat]]) {
      if (!bucket.vcount) continue;
      const m = new THREE.Mesh(bucket.toGeometry(), mat);
      m.castShadow = true; m.receiveShadow = true;
      group.add(m);
    }
    return group;
  }
}

// Utility for textured, per-object meshes (moving platforms etc.) that still
// line up with the world's stud grid.
export function studBoxGeometry(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const pos = g.attributes.position;
  const nrm = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    const nx = Math.abs(nrm.getX(i)), ny = Math.abs(nrm.getY(i));
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    if (ny > 0.5) uv.setXY(i, px * STUD, pz * STUD);
    else if (nx > 0.5) uv.setXY(i, pz * STUD, py * STUD);
    else uv.setXY(i, px * STUD, py * STUD);
  }
  uv.needsUpdate = true;
  return g;
}
