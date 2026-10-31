// On-screen controls for phones and tablets:
//  - a floating joystick on the left half of the screen (push to the edge to run)
//  - drag anywhere else to turn the camera (handled by Input on the canvas)
//  - a big jump button on the right
export class TouchControls {
  constructor(input) {
    this.input = input;
    this.root = document.getElementById('touch-controls');
    this.zone = document.getElementById('joy-zone');
    this.base = document.getElementById('joy-base');
    this.knob = document.getElementById('joy-knob');
    this.jump = document.getElementById('btn-jump');
    this.id = null;
    this.radius = 56;
    this.bindJoystick();
    this.bindButton(this.jump, 'Space');
  }

  enable(on) { this.root.classList.toggle('hidden', !on); if (!on) this.reset(); }

  bindJoystick() {
    const z = this.zone;
    z.addEventListener('pointerdown', (e) => {
      if (this.id !== null) return;
      e.preventDefault();
      this.id = e.pointerId;
      z.setPointerCapture?.(e.pointerId);
      // the stick appears wherever your thumb lands
      const r = z.getBoundingClientRect();
      this.cx = e.clientX; this.cy = e.clientY;
      this.base.style.left = `${e.clientX - r.left}px`;
      this.base.style.top = `${e.clientY - r.top}px`;
      this.base.classList.add('active');
      this.move(e);
    });
    z.addEventListener('pointermove', (e) => { if (e.pointerId === this.id) { e.preventDefault(); this.move(e); } });
    const end = (e) => { if (e.pointerId === this.id) this.reset(); };
    z.addEventListener('pointerup', end);
    z.addEventListener('pointercancel', end);
    z.addEventListener('lostpointercapture', end);
  }

  move(e) {
    let dx = e.clientX - this.cx, dy = e.clientY - this.cy;
    const d = Math.hypot(dx, dy);
    if (d > this.radius) { dx *= this.radius / d; dy *= this.radius / d; }
    this.knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    let x = dx / this.radius, y = dy / this.radius;
    const m = Math.hypot(x, y);
    if (m < 0.15) { x = 0; y = 0; }                       // dead zone
    this.input.joy.x = x; this.input.joy.y = y;
    this.input.joy.run = m > 0.92;
    this.base.classList.toggle('run', this.input.joy.run);
  }

  reset() {
    this.id = null;
    this.input.joy.x = 0; this.input.joy.y = 0; this.input.joy.run = false;
    this.knob.style.transform = 'translate(-50%, -50%)';
    this.base.classList.remove('active', 'run');
    this.base.style.left = ''; this.base.style.top = '';
  }

  bindButton(el, code) {
    const down = (e) => { e.preventDefault(); el.setPointerCapture?.(e.pointerId); el.classList.add('held'); this.input.press(code); };
    const up = () => { el.classList.remove('held'); this.input.release(code); };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('lostpointercapture', up);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }
}
