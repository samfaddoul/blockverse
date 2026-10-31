import * as THREE from 'three';

// Third-person orbit camera with smoothing and collision against the world.
export class ThirdPersonCamera {
  constructor(camera, col) {
    this.camera = camera;
    this.col = col;
    this.yaw = 0;            // camera sits on +z, looking towards -z
    this.pitch = 0.32;
    this.distance = 13;
    this.targetDistance = 13;
    this.currentDist = 13;
    this.focus = new THREE.Vector3();
    this.sensitivity = 1;
    this.invertY = false;
  }

  snap(target) {
    this.focus.copy(target);
    this.currentDist = this.targetDistance;
    this.apply(1);
  }

  update(dt, input, target) {
    const [dx, dy] = input.consumeDrag();
    const s = 0.005 * this.sensitivity;
    this.yaw -= dx * s;
    this.pitch += dy * s * (this.invertY ? -1 : 1);
    this.pitch = THREE.MathUtils.clamp(this.pitch, -0.5, 1.35);
    const w = input.consumeWheel();
    if (w) this.targetDistance = THREE.MathUtils.clamp(this.targetDistance + w * 1.6, 4, 32);
    this.distance += (this.targetDistance - this.distance) * (1 - Math.exp(-10 * dt));

    // Smooth follow (faster vertically lagging slightly for a soft feel)
    const k = 1 - Math.exp(-14 * dt);
    this.focus.x += (target.x - this.focus.x) * k;
    this.focus.z += (target.z - this.focus.z) * k;
    this.focus.y += (target.y - this.focus.y) * (1 - Math.exp(-8 * dt));
    this.apply(dt);
  }

  apply(dt) {
    const cp = Math.cos(this.pitch);
    const dir = new THREE.Vector3(Math.sin(this.yaw) * cp, Math.sin(this.pitch), Math.cos(this.yaw) * cp);
    // Pull the camera in if something blocks the view.
    const hit = this.col.raycast(this.focus.x, this.focus.y, this.focus.z, dir.x, dir.y, dir.z, this.distance);
    const want = Math.max(1.5, hit - 0.4);
    if (want < this.currentDist) this.currentDist = want;
    else this.currentDist += (want - this.currentDist) * (1 - Math.exp(-4 * dt));
    this.camera.position.copy(this.focus).addScaledVector(dir, this.currentDist);
    if (this.camera.position.y < -60) this.camera.position.y = -60;
    this.camera.lookAt(this.focus);
  }

}
