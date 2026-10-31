import * as THREE from 'three';
import { Avatar } from '../entities/avatar.js';
import { drawFace } from '../world/textures.js';

// Renders little 3D previews of avatar items for the shop / inventory UI.
export class ThumbnailRenderer {
  constructor() {
    this.size = 160;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    this.renderer.setSize(this.size, this.size, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.HemisphereLight('#ffffff', '#8aa0b8', 1.6));
    const key = new THREE.DirectionalLight('#ffffff', 2.2); key.position.set(3, 5, 4); this.scene.add(key);
    const rim = new THREE.DirectionalLight('#bfe0ff', 1.0); rim.position.set(-4, 3, -4); this.scene.add(rim);
    this.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    this.avatar = new Avatar();
    this.scene.add(this.avatar.root);
    this.cache = new Map();
  }

  shot(cfg, view = 'head') {
    const key = JSON.stringify(cfg) + view;
    if (this.cache.has(key)) return this.cache.get(key);
    this.avatar.setConfig(cfg);
    this.avatar.update(0.016, { speed: 0, grounded: true });
    this.avatar.headPivot.rotation.set(0, 0, 0);
    this.avatar.body.position.y = 0;
    const r = this.avatar.root;
    if (view === 'head') {
      r.rotation.y = 0.45;
      this.camera.position.set(0, 2.62, 3.6);
      this.camera.lookAt(0, 2.5, 0);
    } else if (view === 'back') {
      r.rotation.y = Math.PI - 0.7;
      this.camera.position.set(0, 2.0, 7.2);
      this.camera.lookAt(0, 1.55, 0);
    } else {
      r.rotation.y = 0.5;
      this.camera.position.set(0, 2.0, 7.2);
      this.camera.lookAt(0, 1.45, 0);
    }
    this.renderer.render(this.scene, this.camera);
    const url = this.renderer.domElement.toDataURL('image/png');
    this.cache.set(key, url);
    return url;
  }

  face(id, skin) {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d');
    g.fillStyle = skin;
    g.beginPath(); g.roundRect(4, 4, 120, 120, 30); g.fill();
    g.fillStyle = 'rgba(0,0,0,0.08)';
    g.beginPath(); g.roundRect(4, 96, 120, 28, [0, 0, 30, 30]); g.fill();
    g.save(); g.translate(14, 12); drawFace(g, id, 100); g.restore();
    return c.toDataURL();
  }
}
