import * as THREE from 'three';
import { Avatar } from './avatar.js';

const HW = 0.55;      // half width of the collision box
const HEIGHT = 2.6;

export class Player {
  constructor(scene, col, avatarCfg) {
    this.col = col;
    this.avatar = new Avatar(avatarCfg);
    scene.add(this.avatar.root);
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.grounded = false;
    this.ground = null;
    this.coyote = 0;
    this.jumpBuffer = 0;
    this.visualY = 0;
    this.stepTimer = 0;
    this.airTime = 0;
    this.frozen = false;
    this.gear = null;
    this.walkSpeed = 9;
    this.runSpeed = 15;
    this.jumpVel = 14;
    this.gravity = 42;
    this.events = {};
    this.knock = new THREE.Vector3();
  }

  on(name, fn) { (this.events[name] ||= []).push(fn); }
  emit(name, ...a) { (this.events[name] || []).forEach((f) => f(...a)); }

  teleport(p, yaw = this.yaw) {
    this.pos.copy(p);
    this.vel.set(0, 0, 0);
    this.knock.set(0, 0, 0);
    this.visualY = p.y;
    this.yaw = yaw;
    this.avatar.root.position.copy(p);
    this.avatar.root.rotation.y = yaw;
  }

  setGear(id) { this.gear = id; this.avatar.setGear(id); }

  applyKnockback(x, y, z) { this.knock.set(x, 0, z); this.vel.y = Math.max(this.vel.y, y); this.grounded = false; }

  update(dt, input, camYaw) {
    const speedMul = this.gear === 'speed' ? 1.4 : 1;
    const gravMul = this.gear === 'gravity' ? 0.55 : 1;

    // ---- input -> desired velocity (camera relative)
    let ix = 0, iz = 0;
    if (!this.frozen) {
      if (input.isDown('KeyW', 'ArrowUp')) iz -= 1;
      if (input.isDown('KeyS', 'ArrowDown')) iz += 1;
      if (input.isDown('KeyA', 'ArrowLeft')) ix -= 1;
      if (input.isDown('KeyD', 'ArrowRight')) ix += 1;
    }
    const len = Math.hypot(ix, iz);
    const running = input.isDown('ShiftLeft', 'ShiftRight');
    const maxSpeed = (running ? this.runSpeed : this.walkSpeed) * speedMul;
    let tx = 0, tz = 0;
    if (len > 0) {
      ix /= len; iz /= len;
      const s = Math.sin(camYaw), c = Math.cos(camYaw);
      tx = (ix * c + iz * s) * maxSpeed;
      tz = (-ix * s + iz * c) * maxSpeed;
    }
    const accel = this.grounded ? 70 : 28;
    const dvx = tx - this.vel.x, dvz = tz - this.vel.z;
    const dl = Math.hypot(dvx, dvz), maxDv = accel * dt;
    if (dl > maxDv) { this.vel.x += (dvx / dl) * maxDv; this.vel.z += (dvz / dl) * maxDv; }
    else { this.vel.x = tx; this.vel.z = tz; }

    // ---- jumping (with coyote time + input buffering for a forgiving feel)
    this.coyote = this.grounded ? 0.12 : this.coyote - dt;
    this.jumpBuffer = !this.frozen && input.wasPressed('Space') ? 0.14 : this.jumpBuffer - dt;
    if (this.jumpBuffer > 0 && this.coyote > 0) {
      this.vel.y = this.jumpVel * (this.gear === 'gravity' ? 1.12 : 1);
      this.grounded = false; this.coyote = 0; this.jumpBuffer = 0;
      this.emit('jump');
    }
    // variable jump height: release early for a short hop
    if (!input.isDown('Space') && this.vel.y > 4 && !this.grounded) this.vel.y -= 60 * dt * gravMul;

    this.vel.y -= this.gravity * gravMul * dt;
    if (this.vel.y < -60) this.vel.y = -60;

    // ---- ride moving platforms
    if (this.grounded && this.ground && (this.ground.dx || this.ground.dy || this.ground.dz)) {
      this.pos.x += this.ground.dx; this.pos.z += this.ground.dz;
      if (this.ground.dy > 0) this.pos.y += this.ground.dy;
    }

    // knockback (decays quickly)
    const kv = new THREE.Vector3(this.vel.x + this.knock.x, this.vel.y, this.vel.z + this.knock.z);
    this.knock.multiplyScalar(Math.exp(-3 * dt));

    const wasGrounded = this.grounded;
    const prevVy = this.vel.y;
    const res = this.col.move(this.pos, kv, dt, HW, HEIGHT, { wasGrounded });
    this.vel.y = kv.y;
    if (kv.x === 0) { this.vel.x = 0; this.knock.x = 0; }
    if (kv.z === 0) { this.vel.z = 0; this.knock.z = 0; }
    this.grounded = res.grounded;
    this.ground = res.ground;

    if (this.grounded && !wasGrounded && this.airTime > 0.25) this.emit('land', prevVy);
    this.airTime = this.grounded ? 0 : this.airTime + dt;

    for (const c of res.touched) this.emit('touch', c);

    // ---- facing + visuals
    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (hs > 0.5) {
      const target = Math.atan2(this.vel.x, this.vel.z);
      let d = target - this.yaw;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      this.yaw += d * (1 - Math.exp(-14 * dt));
    }
    // smooth out step-ups so stairs and hills feel fluid
    if (res.stepped > 0 || (this.grounded && this.visualY < this.pos.y)) this.visualY += (this.pos.y - this.visualY) * (1 - Math.exp(-18 * dt));
    else this.visualY = this.pos.y;
    if (Math.abs(this.visualY - this.pos.y) > 1.5) this.visualY = this.pos.y;

    const root = this.avatar.root;
    root.position.set(this.pos.x, this.visualY, this.pos.z);
    root.rotation.y = this.yaw;
    const runRatio = THREE.MathUtils.clamp((hs - this.walkSpeed) / (this.runSpeed - this.walkSpeed), 0, 1);
    this.avatar.update(dt, { speed: hs, grounded: this.grounded, vy: this.vel.y, runRatio });

    // footsteps
    if (this.grounded && hs > 1) {
      this.stepTimer -= dt * hs;
      if (this.stepTimer <= 0) { this.stepTimer = 3.2; this.emit('step'); }
    }

    if (this.pos.y < -45) this.emit('fall');
  }

  get head() { return new THREE.Vector3(this.pos.x, this.visualY + 2.4, this.pos.z); }
}
