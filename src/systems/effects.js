import * as THREE from 'three';

// Pooled particle bursts (sparkles, confetti, poofs) drawn with one InstancedMesh.
const MAX = 600;

export class Effects {
  constructor(scene) {
    this.mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ toneMapped: false }), MAX);
    this.mesh.frustumCulled = false;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(this.mesh);
    this.parts = [];
    this.dummy = new THREE.Object3D();
    this.color = new THREE.Color();
    for (let i = 0; i < MAX; i++) this.mesh.setColorAt(i, this.color.set('#fff'));
  }

  burst(pos, { count = 20, colors = ['#ffd54f'], speed = 6, up = 4, gravity = 14, life = 0.8, size = 0.2, spin = 8 } = {}) {
    for (let i = 0; i < count; i++) {
      if (this.parts.length >= MAX) this.parts.shift();
      const a = Math.random() * Math.PI * 2, e = Math.random() * 0.8 + 0.2;
      this.parts.push({
        p: pos.clone(),
        v: new THREE.Vector3(Math.cos(a) * speed * e, up + Math.random() * up, Math.sin(a) * speed * e),
        r: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6),
        life, max: life, size: size * (0.6 + Math.random() * 0.8), gravity, spin,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }

  update(dt) {
    const d = this.dummy;
    this.parts = this.parts.filter((q) => (q.life -= dt) > 0);
    this.parts.forEach((q, i) => {
      q.v.y -= q.gravity * dt;
      q.v.multiplyScalar(Math.exp(-1.2 * dt));
      q.p.addScaledVector(q.v, dt);
      q.r.addScalar(q.spin * dt);
      d.position.copy(q.p);
      d.rotation.set(q.r.x, q.r.y, q.r.z);
      d.scale.setScalar(q.size * Math.min(1, (q.life / q.max) * 2.5));
      d.updateMatrix();
      this.mesh.setMatrixAt(i, d.matrix);
      this.mesh.setColorAt(i, this.color.set(q.color));
    });
    this.mesh.count = this.parts.length;
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }
}
