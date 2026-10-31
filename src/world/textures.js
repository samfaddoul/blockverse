import * as THREE from 'three';

function canvas(w, h = w) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

function finish(c, renderer, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = renderer ? Math.min(8, renderer.capabilities.getMaxAnisotropy()) : 4;
  t.needsUpdate = true;
  return t;
}

// Classic studded top surface. One texture tile = one stud.
export function makeStudTexture(renderer) {
  const S = 128;
  const [c, g] = canvas(S);
  g.fillStyle = '#e9e9e9';
  g.fillRect(0, 0, S, S);
  // faint seam
  g.strokeStyle = 'rgba(0,0,0,0.05)';
  g.lineWidth = 2;
  g.strokeRect(1, 1, S - 2, S - 2);
  const cx = S / 2, cy = S / 2, r = S * 0.29;
  // drop shadow
  g.fillStyle = 'rgba(0,0,0,0.13)';
  g.beginPath(); g.arc(cx + 5, cy + 6, r, 0, Math.PI * 2); g.fill();
  // stud body
  const grad = g.createRadialGradient(cx - r * 0.4, cy - r * 0.4, r * 0.1, cx, cy, r);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(1, '#e2e2e2');
  g.fillStyle = grad;
  g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fill();
  // rim highlight
  g.strokeStyle = 'rgba(255,255,255,0.9)';
  g.lineWidth = 3;
  g.beginPath(); g.arc(cx, cy, r - 2, Math.PI * 0.9, Math.PI * 1.6); g.stroke();
  g.strokeStyle = 'rgba(0,0,0,0.12)';
  g.beginPath(); g.arc(cx, cy, r - 1, Math.PI * 1.9, Math.PI * 0.6); g.stroke();
  return finish(c, renderer);
}

// Subtle noisy surface for block sides, leaves, rocks.
export function makeSmoothTexture(renderer) {
  const S = 128;
  const [c, g] = canvas(S);
  const img = g.createImageData(S, S);
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < S * S; i++) {
    const v = 232 + Math.floor(rnd() * 23);
    img.data[i * 4] = v; img.data[i * 4 + 1] = v; img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  // a few soft speckles
  for (let i = 0; i < 40; i++) {
    g.fillStyle = `rgba(0,0,0,${0.02 + rnd() * 0.03})`;
    g.fillRect(Math.floor(rnd() * S), Math.floor(rnd() * S), 2 + rnd() * 6, 2 + rnd() * 6);
  }
  const t = finish(c, renderer);
  t.magFilter = THREE.LinearFilter;
  return t;
}

// Glowing animated lava surface.
export function makeLavaTexture(renderer) {
  const S = 128;
  const [c, g] = canvas(S);
  g.fillStyle = '#ff5a00';
  g.fillRect(0, 0, S, S);
  for (let i = 0; i < 26; i++) {
    const x = Math.random() * S, y = Math.random() * S, r = 6 + Math.random() * 18;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(255,230,90,0.95)');
    gr.addColorStop(1, 'rgba(255,120,0,0)');
    g.fillStyle = gr;
    for (const dx of [-S, 0, S]) for (const dy of [-S, 0, S]) {
      g.beginPath(); g.arc(x + dx, y + dy, r, 0, Math.PI * 2); g.fill();
    }
  }
  for (let i = 0; i < 14; i++) {
    g.fillStyle = 'rgba(160,20,0,0.35)';
    const x = Math.random() * S, y = Math.random() * S;
    g.beginPath(); g.arc(x, y, 3 + Math.random() * 6, 0, Math.PI * 2); g.fill();
  }
  return finish(c, renderer);
}

// Checkered finish-line texture.
export function makeCheckerTexture(renderer) {
  const S = 64;
  const [c, g] = canvas(S);
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
    g.fillStyle = (x + y) % 2 ? '#111' : '#fff';
    g.fillRect(x * 16, y * 16, 16, 16);
  }
  const t = finish(c, renderer);
  t.magFilter = THREE.NearestFilter;
  return t;
}

// ---------- Faces ----------
const faceCache = new Map();

export function drawFace(g, id, S) {
  g.clearRect(0, 0, S, S);
  const k = S / 128;
  const ink = '#1d1d1f';
  g.fillStyle = ink; g.strokeStyle = ink;
  g.lineCap = 'round'; g.lineJoin = 'round';
  const eye = (x, y, w = 9, h = 15) => {
    g.beginPath(); g.ellipse(x * k, y * k, w * k, h * k, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#fff';
    g.beginPath(); g.ellipse((x - w * 0.3) * k, (y - h * 0.4) * k, w * 0.38 * k, h * 0.28 * k, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = ink;
  };
  const smile = (y = 78, w = 30, depth = 18, lw = 7) => {
    g.lineWidth = lw * k;
    g.beginPath();
    g.moveTo((64 - w) * k, y * k);
    g.quadraticCurveTo(64 * k, (y + depth * 1.6) * k, (64 + w) * k, y * k);
    g.stroke();
  };
  const blush = () => {
    g.fillStyle = 'rgba(255,90,110,0.28)';
    g.beginPath(); g.ellipse(32 * k, 76 * k, 10 * k, 6 * k, 0, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.ellipse(96 * k, 76 * k, 10 * k, 6 * k, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = ink;
  };
  switch (id) {
    case 'grin': {
      eye(46, 52); eye(82, 52);
      g.beginPath();
      g.moveTo(34 * k, 74 * k);
      g.quadraticCurveTo(64 * k, 116 * k, 94 * k, 74 * k);
      g.closePath(); g.fill();
      g.fillStyle = '#fff';
      g.fillRect(42 * k, 75 * k, 44 * k, 8 * k);
      g.fillStyle = ink;
      break;
    }
    case 'happy': {
      g.lineWidth = 7 * k;
      g.beginPath(); g.arc(46 * k, 58 * k, 10 * k, Math.PI * 1.1, Math.PI * 1.9); g.stroke();
      g.beginPath(); g.arc(82 * k, 58 * k, 10 * k, Math.PI * 1.1, Math.PI * 1.9); g.stroke();
      blush(); smile(78, 26, 16);
      break;
    }
    case 'wink': {
      eye(46, 52);
      g.lineWidth = 7 * k;
      g.beginPath(); g.moveTo(72 * k, 54 * k); g.lineTo(92 * k, 50 * k); g.stroke();
      smile(78, 28, 14);
      g.fillStyle = '#ff6f8a';
      g.beginPath(); g.ellipse(72 * k, 92 * k, 7 * k, 6 * k, 0, 0, Math.PI * 2); g.fill();
      break;
    }
    case 'cool': {
      g.fillStyle = '#111';
      g.beginPath();
      g.moveTo(22 * k, 40 * k); g.lineTo(106 * k, 40 * k); g.lineTo(100 * k, 64 * k);
      g.quadraticCurveTo(84 * k, 70 * k, 70 * k, 56 * k); g.lineTo(58 * k, 56 * k);
      g.quadraticCurveTo(44 * k, 70 * k, 28 * k, 64 * k); g.closePath(); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.5)';
      g.fillRect(32 * k, 44 * k, 14 * k, 4 * k); g.fillRect(76 * k, 44 * k, 14 * k, 4 * k);
      g.strokeStyle = ink; smile(82, 20, 8, 6);
      break;
    }
    case 'surprised': {
      eye(44, 50, 10, 13); eye(84, 50, 10, 13);
      g.lineWidth = 5 * k;
      g.beginPath(); g.moveTo(34 * k, 30 * k); g.lineTo(52 * k, 26 * k); g.stroke();
      g.beginPath(); g.moveTo(76 * k, 26 * k); g.lineTo(94 * k, 30 * k); g.stroke();
      g.beginPath(); g.ellipse(64 * k, 88 * k, 10 * k, 13 * k, 0, 0, Math.PI * 2); g.fill();
      break;
    }
    case 'determined': {
      eye(46, 56, 8, 11); eye(82, 56, 8, 11);
      g.lineWidth = 7 * k;
      g.beginPath(); g.moveTo(32 * k, 36 * k); g.lineTo(56 * k, 44 * k); g.stroke();
      g.beginPath(); g.moveTo(96 * k, 36 * k); g.lineTo(72 * k, 44 * k); g.stroke();
      g.beginPath(); g.moveTo(46 * k, 88 * k); g.quadraticCurveTo(64 * k, 82 * k, 82 * k, 88 * k); g.stroke();
      break;
    }
    case 'sleepy': {
      g.lineWidth = 6 * k;
      g.beginPath(); g.arc(46 * k, 52 * k, 10 * k, Math.PI * 0.1, Math.PI * 0.9); g.stroke();
      g.beginPath(); g.arc(82 * k, 52 * k, 10 * k, Math.PI * 0.1, Math.PI * 0.9); g.stroke();
      g.beginPath(); g.ellipse(64 * k, 88 * k, 6 * k, 5 * k, 0, 0, Math.PI * 2); g.fill();
      g.font = `bold ${20 * k}px sans-serif`;
      g.fillText('z', 98 * k, 30 * k);
      g.font = `bold ${14 * k}px sans-serif`;
      g.fillText('z', 112 * k, 18 * k);
      break;
    }
    case 'silly': {
      eye(44, 50, 9, 14);
      g.beginPath(); g.ellipse(84 * k, 54 * k, 6 * k, 9 * k, 0, 0, Math.PI * 2); g.fill();
      smile(76, 28, 14);
      g.fillStyle = '#ff6f8a';
      g.beginPath(); g.roundRect(62 * k, 86 * k, 18 * k, 18 * k, 8 * k); g.fill();
      g.strokeStyle = '#d94c68'; g.lineWidth = 2 * k;
      g.beginPath(); g.moveTo(71 * k, 88 * k); g.lineTo(71 * k, 98 * k); g.stroke();
      break;
    }
    case 'star': {
      const star = (x, y, r) => {
        g.fillStyle = '#FFC107';
        g.beginPath();
        for (let i = 0; i < 10; i++) {
          const a = -Math.PI / 2 + (i * Math.PI) / 5;
          const rr = i % 2 ? r * 0.45 : r;
          g.lineTo((x + Math.cos(a) * rr) * k, (y + Math.sin(a) * rr) * k);
        }
        g.closePath(); g.fill();
        g.strokeStyle = '#7a5200'; g.lineWidth = 2 * k; g.stroke();
      };
      star(44, 52, 15); star(84, 52, 15);
      g.fillStyle = ink; g.strokeStyle = ink;
      g.beginPath(); g.moveTo(40 * k, 78 * k); g.quadraticCurveTo(64 * k, 112 * k, 88 * k, 78 * k); g.closePath(); g.fill();
      break;
    }
    case 'smile':
    default: {
      eye(46, 52, 7, 12); eye(82, 52, 7, 12);
      smile(80, 26, 14);
    }
  }
}

export function getFaceTexture(id) {
  if (faceCache.has(id)) return faceCache.get(id);
  const [c, g] = canvas(256);
  drawFace(g, id, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  faceCache.set(id, t);
  return t;
}

// A crisp text sign texture (used for world signs).
export function makeSignTexture(text, { bg = '#2b2f3a', fg = '#ffffff', accent = '#ffcc33', w = 512, h = 160 } = {}) {
  const [c, g] = canvas(w, h);
  g.fillStyle = bg;
  g.beginPath(); g.roundRect(0, 0, w, h, 26); g.fill();
  g.strokeStyle = accent; g.lineWidth = 10;
  g.beginPath(); g.roundRect(10, 10, w - 20, h - 20, 18); g.stroke();
  g.fillStyle = fg;
  const font = (px) => `900 ${px}px "Fredoka", "Arial Rounded MT Bold", Arial, sans-serif`;
  let size = Math.floor(h * 0.42);
  g.font = font(size);
  while (g.measureText(text).width > w - 70 && size > 12) g.font = font(--size);
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, w / 2, h / 2 + 4);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
