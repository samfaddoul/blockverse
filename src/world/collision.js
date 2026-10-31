// Axis-aligned box collision world with a spatial hash for static boxes.
// Dynamic colliders (moving / vanishing platforms) are checked every query.

const CELL = 8;
const EPS = 1e-4;

export class Collider {
  constructor(minX, minY, minZ, maxX, maxY, maxZ, type = 'solid', data = null) {
    this.minX = minX; this.minY = minY; this.minZ = minZ;
    this.maxX = maxX; this.maxY = maxY; this.maxZ = maxZ;
    this.type = type;   // solid | lava | trigger
    this.data = data;
    this.active = true;
    this.stamp = 0;
    this.vx = 0; this.vy = 0; this.vz = 0; // velocity of moving platforms (units / s)
    this.dx = 0; this.dy = 0; this.dz = 0; // displacement this frame
  }
  static fromCenter(x, y, z, w, h, d, type, data) {
    return new Collider(x - w / 2, y - h / 2, z - d / 2, x + w / 2, y + h / 2, z + d / 2, type, data);
  }
  setCenter(x, y, z) {
    const hw = (this.maxX - this.minX) / 2, hh = (this.maxY - this.minY) / 2, hd = (this.maxZ - this.minZ) / 2;
    this.minX = x - hw; this.maxX = x + hw;
    this.minY = y - hh; this.maxY = y + hh;
    this.minZ = z - hd; this.maxZ = z + hd;
  }
  get solid() { return this.type !== 'trigger'; }
}

export class CollisionWorld {
  constructor() {
    this.grid = new Map();
    this.dynamic = [];
    this.stamp = 1;
    this._out = [];
  }

  add(c) {
    const x0 = Math.floor(c.minX / CELL), x1 = Math.floor(c.maxX / CELL);
    const z0 = Math.floor(c.minZ / CELL), z1 = Math.floor(c.maxZ / CELL);
    for (let ix = x0; ix <= x1; ix++) for (let iz = z0; iz <= z1; iz++) {
      const k = ix * 73856093 ^ iz * 19349663;
      let arr = this.grid.get(k);
      if (!arr) this.grid.set(k, arr = []);
      arr.push(c);
    }
    return c;
  }
  addBox(x, y, z, w, h, d, type = 'solid', data = null) { return this.add(Collider.fromCenter(x, y, z, w, h, d, type, data)); }
  addDynamic(c) { this.dynamic.push(c); return c; }

  query(minX, minZ, maxX, maxZ) {
    const out = this._out; out.length = 0;
    const s = ++this.stamp;
    const x0 = Math.floor(minX / CELL), x1 = Math.floor(maxX / CELL);
    const z0 = Math.floor(minZ / CELL), z1 = Math.floor(maxZ / CELL);
    for (let ix = x0; ix <= x1; ix++) for (let iz = z0; iz <= z1; iz++) {
      const arr = this.grid.get(ix * 73856093 ^ iz * 19349663);
      if (!arr) continue;
      for (const c of arr) if (c.stamp !== s) { c.stamp = s; out.push(c); }
    }
    for (const c of this.dynamic) if (c.active) out.push(c);
    return out;
  }

  static overlaps(c, x, y, z, hw, h) {
    return c.active &&
      x + hw > c.minX + EPS && x - hw < c.maxX - EPS &&
      y + h > c.minY + EPS && y < c.maxY - EPS &&
      z + hw > c.minZ + EPS && z - hw < c.maxZ - EPS;
  }

  boxFree(x, y, z, hw, h, list) {
    for (const c of list) if (c.solid && CollisionWorld.overlaps(c, x, y, z, hw, h)) return false;
    return true;
  }

  // Moves a character box (feet at pos.y) and resolves collisions axis by axis.
  move(pos, vel, dt, hw, h, { stepHeight = 1.05, wasGrounded = false } = {}) {
    const res = { grounded: false, ground: null, hitHead: false, touched: [], stepped: 0 };
    const reach = Math.max(Math.abs(vel.x), Math.abs(vel.z)) * dt + hw + 2;
    const list = this.query(pos.x - reach, pos.z - reach, pos.x + reach, pos.z + reach).slice();

    const horiz = (axis) => {
      const v = axis === 'x' ? vel.x : vel.z;
      pos[axis] += v * dt;
      for (const c of list) {
        if (!c.solid || !CollisionWorld.overlaps(c, pos.x, pos.y, pos.z, hw, h)) continue;
        const rise = c.maxY - pos.y;
        if (wasGrounded && rise > 0 && rise <= stepHeight && this.boxFree(pos.x, c.maxY + EPS, pos.z, hw, h, list)) {
          pos.y = c.maxY + EPS; res.stepped = Math.max(res.stepped, rise);
          continue;
        }
        const min = axis === 'x' ? c.minX : c.minZ, max = axis === 'x' ? c.maxX : c.maxZ;
        const centre = (min + max) / 2;
        const dir = v !== 0 ? Math.sign(v) : (pos[axis] < centre ? 1 : -1);
        pos[axis] = dir > 0 ? min - hw - EPS : max + hw + EPS;
        if (axis === 'x') vel.x = 0; else vel.z = 0;
        if (c.type !== 'solid') res.touched.push(c);
      }
    };
    horiz('x');
    horiz('z');

    pos.y += vel.y * dt;
    for (const c of list) {
      // triggers (lava zones, checkpoints) are tested once the move is fully resolved, below
      if (!c.solid || !CollisionWorld.overlaps(c, pos.x, pos.y, pos.z, hw, h)) continue;
      const centre = (c.minY + c.maxY) / 2;
      if (vel.y <= 0 || pos.y > centre) {
        pos.y = c.maxY; vel.y = 0;
        res.grounded = true; res.ground = c;
      } else {
        pos.y = c.minY - h - EPS; vel.y = Math.min(0, vel.y);
        res.hitHead = true;
      }
      if (c.type !== 'solid') res.touched.push(c);
    }
    // Probe just below the feet so standing still on a surface keeps us grounded.
    if (!res.grounded && vel.y <= 0) {
      for (const c of list) {
        if (c.solid && c.active && CollisionWorld.overlaps(c, pos.x, pos.y - 0.06, pos.z, hw * 0.98, 0.05)) {
          res.grounded = true; res.ground = c;
          if (c.type !== 'solid') res.touched.push(c);
          break;
        }
      }
    }
    // Triggers we stand inside.
    for (const c of list) if (c.type === 'trigger' && CollisionWorld.overlaps(c, pos.x, pos.y, pos.z, hw, h)) res.touched.push(c);
    return res;
  }

  // Highest solid surface under (x, z) at or below maxY.
  groundHeight(x, z, maxY = 1e9) {
    let best = -Infinity;
    for (const c of this.query(x, z, x, z)) {
      if (!c.solid || !c.active) continue;
      if (x >= c.minX && x <= c.maxX && z >= c.minZ && z <= c.maxZ && c.maxY <= maxY && c.maxY > best) best = c.maxY;
    }
    return best;
  }

  // Ray vs boxes (slab test). Returns distance to first hit or maxDist.
  raycast(ox, oy, oz, dx, dy, dz, maxDist) {
    const ex = ox + dx * maxDist, ez = oz + dz * maxDist;
    const list = this.query(Math.min(ox, ex), Math.min(oz, ez), Math.max(ox, ex), Math.max(oz, ez));
    let best = maxDist;
    for (const c of list) {
      if (!c.solid || !c.active || c.data?.noCamera) continue;
      let tmin = 0, tmax = best;
      const axes = [[ox, dx, c.minX, c.maxX], [oy, dy, c.minY, c.maxY], [oz, dz, c.minZ, c.maxZ]];
      let hit = true;
      for (const [o, d, mn, mx] of axes) {
        if (Math.abs(d) < 1e-8) { if (o < mn || o > mx) { hit = false; break; } continue; }
        let t1 = (mn - o) / d, t2 = (mx - o) / d;
        if (t1 > t2) [t1, t2] = [t2, t1];
        if (t1 > tmin) tmin = t1;
        if (t2 < tmax) tmax = t2;
        if (tmin > tmax) { hit = false; break; }
      }
      if (hit && tmin > 0 && tmin < best) best = tmin;
    }
    return best;
  }
}
