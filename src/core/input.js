// Keyboard + mouse input.
// In-game the mouse is pointer-locked: the cursor hides and moving the mouse turns the camera.
// When the cursor is free (menus, avatar editor) dragging on the canvas turns it instead.
export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.down = new Set();
    this.pressed = new Set();
    this.dragDX = 0;
    this.dragDY = 0;
    this.wheel = 0;
    this.dragging = false;
    this.locked = false;
    this.lockPending = false;
    this.lastUnlock = 0;
    this.lockTime = 0;
    this.onLockChange = null;

    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      // stop the page from scrolling, and stop Space/Enter from "clicking" a focused button
      if (['Space', 'Tab', 'Enter'].includes(e.code) || e.code.startsWith('Arrow')) e.preventDefault();
      if (!this.down.has(e.code)) this.pressed.add(e.code);
      this.down.add(e.code);
    });
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space' || e.code === 'Enter') e.preventDefault();
      this.down.delete(e.code);
    });
    window.addEventListener('blur', () => { this.down.clear(); this.dragging = false; });
    // buttons give focus back to the game as soon as they are clicked
    document.addEventListener('click', (e) => { const b = e.target.closest?.('button'); if (b) b.blur(); });

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('pointerdown', (e) => {
      if (this.locked) return;
      this.dragging = true;
      this.lastX = e.clientX; this.lastY = e.clientY;
      canvas.setPointerCapture?.(e.pointerId);
    });
    window.addEventListener('pointermove', (e) => {
      if (this.locked) return;
      if (!this.dragging) return;
      this.dragDX += e.clientX - this.lastX;
      this.dragDY += e.clientY - this.lastY;
      this.lastX = e.clientX; this.lastY = e.clientY;
    });
    // raw mouse movement while the pointer is locked (scaled to feel like dragging)
    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      // ignore the jump some browsers report right after locking, and any absurd spikes
      if (performance.now() - this.lockTime < 150) return;
      if (Math.abs(e.movementX) > 300 || Math.abs(e.movementY) > 300) return;
      this.dragDX += e.movementX * 0.5;
      this.dragDY += e.movementY * 0.5;
    });
    window.addEventListener('pointerup', () => { this.dragging = false; });
    // zoom: on the canvas when the cursor is free, anywhere while locked
    window.addEventListener('wheel', (e) => {
      if (this.locked || e.target === canvas) { e.preventDefault(); this.wheel += Math.sign(e.deltaY); }
    }, { passive: false });

    document.addEventListener('pointerlockchange', () => {
      const was = this.locked;
      this.locked = document.pointerLockElement === canvas;
      this.lockPending = false;
      if (was && !this.locked) this.lastUnlock = performance.now();
      if (!was && this.locked) this.lockTime = performance.now();
      this.dragging = false;
      this.dragDX = this.dragDY = 0;
      this.onLockChange?.(this.locked);
    });
    document.addEventListener('pointerlockerror', () => { this.lockPending = false; });
  }

  get lockSupported() { return 'requestPointerLock' in this.canvas; }

  lock() {
    if (this.locked || this.lockPending || !this.lockSupported) return;
    this.lockPending = true;
    try {
      const p = this.canvas.requestPointerLock({ unadjustedMovement: true });
      if (p && p.catch) {
        p.catch(() => {
          // unadjustedMovement isn't supported everywhere: retry without it
          try {
            const p2 = this.canvas.requestPointerLock();
            if (p2 && p2.catch) p2.catch(() => { this.lockPending = false; });
          } catch { this.lockPending = false; }
        });
      }
    } catch { this.lockPending = false; }
    setTimeout(() => { this.lockPending = false; }, 1200);
  }

  unlock() { if (this.locked) document.exitPointerLock(); }

  isDown(...codes) { return codes.some((c) => this.down.has(c)); }
  wasPressed(...codes) { return codes.some((c) => this.pressed.has(c)); }

  consumeDrag() { const d = [this.dragDX, this.dragDY]; this.dragDX = 0; this.dragDY = 0; return d; }
  consumeWheel() { const w = this.wheel; this.wheel = 0; return w; }
  endFrame() { this.pressed.clear(); }
}
