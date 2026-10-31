import * as THREE from 'three';

const RESPAWN = 90; // seconds before a collected coin comes back

export class Coins {
  constructor(scene, spots) {
    this.coins = spots.map(([x, y, z], i) => ({ pos: new THREE.Vector3(x, y, z), active: true, timer: 0, phase: i * 0.7 }));
    const n = this.coins.length;
    const rim = new THREE.CylinderGeometry(0.5, 0.5, 0.12, 24);
    rim.rotateX(Math.PI / 2);
    const face = new THREE.CylinderGeometry(0.34, 0.34, 0.16, 6);
    face.rotateX(Math.PI / 2);
    this.rim = new THREE.InstancedMesh(rim, new THREE.MeshStandardMaterial({ color: '#ffc928', metalness: 0.75, roughness: 0.25, emissive: '#7a5200', emissiveIntensity: 0.45 }), n);
    this.face = new THREE.InstancedMesh(face, new THREE.MeshStandardMaterial({ color: '#fff176', metalness: 0.6, roughness: 0.3, emissive: '#a07800', emissiveIntensity: 0.5 }), n);
    this.rim.castShadow = true;
    this.rim.frustumCulled = this.face.frustumCulled = false;
    scene.add(this.rim, this.face);
    this.dummy = new THREE.Object3D();
    this.t = 0;
  }

  get remaining() { return this.coins.filter((c) => c.active).length; }

  update(dt, playerPos, onCollect) {
    this.t += dt;
    const d = this.dummy;
    const px = playerPos.x, py = playerPos.y + 1.3, pz = playerPos.z;
    this.coins.forEach((c, i) => {
      if (!c.active) {
        c.timer -= dt;
        if (c.timer <= 0) c.active = true;
      } else {
        const dx = c.pos.x - px, dy = c.pos.y - py, dz = c.pos.z - pz;
        if (dx * dx + dz * dz < 1.6 && Math.abs(dy) < 1.9) {
          c.active = false; c.timer = RESPAWN;
          onCollect(c);
        }
      }
      const s = c.active ? 1 : 0;
      d.position.set(c.pos.x, c.pos.y + Math.sin(this.t * 2.5 + c.phase) * 0.18, c.pos.z);
      d.rotation.set(0, this.t * 2.6 + c.phase, 0);
      d.scale.setScalar(s || 1e-4);
      d.updateMatrix();
      this.rim.setMatrixAt(i, d.matrix);
      this.face.setMatrixAt(i, d.matrix);
    });
    this.rim.instanceMatrix.needsUpdate = true;
    this.face.instanceMatrix.needsUpdate = true;
  }
}
