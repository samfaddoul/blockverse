// Fully synthesized audio: sound effects + a cheerful procedural music loop.
// No audio files needed — everything is built with the Web Audio API.

const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12); // midi -> Hz

export class AudioSystem {
  constructor() {
    this.ctx = null;
    this.musicVol = 0.5;
    this.sfxVol = 0.7;
    this.musicOn = false;
  }

  // Must be called from a user gesture.
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.9;
    // gentle compressor keeps everything glued and avoids clipping
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    this.master.connect(comp).connect(this.ctx.destination);

    this.sfxBus = this.ctx.createGain();
    this.sfxBus.gain.value = this.sfxVol;
    this.sfxBus.connect(this.master);

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = this.musicVol * 0.55;
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 3200;
    this.musicBus.connect(lp).connect(this.master);

    // simple echo for the music to give it space
    const delay = this.ctx.createDelay(); delay.delayTime.value = 0.33;
    const fb = this.ctx.createGain(); fb.gain.value = 0.22;
    const wet = this.ctx.createGain(); wet.gain.value = 0.25;
    lp.connect(delay); delay.connect(fb).connect(delay); delay.connect(wet).connect(this.master);

    this.noiseBuf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.5, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }

  setMusicVolume(v) { this.musicVol = v; if (this.musicBus) this.musicBus.gain.setTargetAtTime(v * 0.55, this.ctx.currentTime, 0.1); }
  setSfxVolume(v) { this.sfxVol = v; if (this.sfxBus) this.sfxBus.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05); }

  tone(freq, start, dur, { type = 'sine', vol = 0.3, slideTo = null, attack = 0.005, bus = this.sfxBus } = {}) {
    const c = this.ctx;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, start);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, start + dur);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(vol, start + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(g).connect(bus);
    o.start(start); o.stop(start + dur + 0.02);
  }

  noise(start, dur, { vol = 0.2, freq = 1200, q = 1, type = 'bandpass' } = {}) {
    const c = this.ctx;
    const s = c.createBufferSource(); s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    s.connect(f).connect(g).connect(this.sfxBus);
    s.start(start); s.stop(start + dur + 0.02);
  }

  play(name) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    switch (name) {
      case 'jump':
        this.tone(320, t, 0.16, { type: 'square', vol: 0.09, slideTo: 640 });
        break;
      case 'land':
        this.noise(t, 0.08, { vol: 0.12, freq: 400 });
        break;
      case 'step':
        this.noise(t, 0.05, { vol: 0.045, freq: 700 + Math.random() * 300, q: 2 });
        break;
      case 'coin':
        this.tone(NOTE(83), t, 0.09, { type: 'square', vol: 0.08 });
        this.tone(NOTE(88), t + 0.07, 0.28, { type: 'square', vol: 0.08 });
        this.tone(NOTE(88), t + 0.07, 0.3, { type: 'sine', vol: 0.12 });
        break;
      case 'talk':
        this.tone(660, t, 0.07, { type: 'triangle', vol: 0.2, slideTo: 990 });
        this.tone(880, t + 0.06, 0.09, { type: 'triangle', vol: 0.15 });
        break;
      case 'blip':
        this.tone(500 + Math.random() * 300, t, 0.04, { type: 'square', vol: 0.03 });
        break;
      case 'click':
        this.tone(700, t, 0.05, { type: 'triangle', vol: 0.18, slideTo: 1000 });
        break;
      case 'hover':
        this.tone(1200, t, 0.03, { type: 'sine', vol: 0.05 });
        break;
      case 'checkpoint':
        [72, 76, 79, 84].forEach((n, i) => this.tone(NOTE(n), t + i * 0.07, 0.25, { type: 'triangle', vol: 0.18 }));
        break;
      case 'finish':
        [72, 76, 79, 84, 79, 84, 88].forEach((n, i) => this.tone(NOTE(n), t + i * 0.1, 0.35, { type: 'square', vol: 0.07 }));
        [60, 64, 67].forEach((n) => this.tone(NOTE(n), t + 0.6, 0.9, { type: 'triangle', vol: 0.12 }));
        break;
      case 'levelup':
        [67, 72, 76, 79, 84].forEach((n, i) => this.tone(NOTE(n), t + i * 0.08, 0.4, { type: 'triangle', vol: 0.16 }));
        break;
      case 'death':
        this.tone(420, t, 0.35, { type: 'sawtooth', vol: 0.09, slideTo: 90 });
        this.noise(t, 0.25, { vol: 0.1, freq: 300 });
        break;
      case 'lava':
        this.noise(t, 0.4, { vol: 0.2, freq: 900, type: 'highpass' });
        this.tone(300, t, 0.35, { type: 'sawtooth', vol: 0.08, slideTo: 60 });
        break;
      case 'buy':
        this.tone(NOTE(76), t, 0.1, { type: 'square', vol: 0.07 });
        this.tone(NOTE(81), t + 0.08, 0.1, { type: 'square', vol: 0.07 });
        this.tone(NOTE(88), t + 0.16, 0.3, { type: 'square', vol: 0.07 });
        break;
      case 'error':
        this.tone(220, t, 0.12, { type: 'square', vol: 0.07 });
        this.tone(180, t + 0.1, 0.18, { type: 'square', vol: 0.07 });
        break;
      case 'vanish':
        this.tone(900, t, 0.2, { type: 'sine', vol: 0.08, slideTo: 300 });
        break;
      case 'equip':
        this.tone(NOTE(79), t, 0.08, { type: 'triangle', vol: 0.16 });
        this.tone(NOTE(86), t + 0.06, 0.14, { type: 'triangle', vol: 0.16 });
        break;
    }
  }

  // ---------- Procedural music ----------
  startMusic() {
    if (!this.ctx || this.musicOn) return;
    this.musicOn = true;
    this.bpm = 112;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.1;
    const spb = 60 / this.bpm / 2; // eighth notes
    // I - V - vi - IV in C major, with a bouncy melody
    const chords = [[48, 55, 64, 67], [43, 55, 62, 67], [45, 52, 60, 64], [41, 53, 60, 65]];
    const melody = [
      76, null, 79, 76, 74, null, 72, null, 74, null, 76, null, 79, null, null, null,
      74, null, 76, 74, 71, null, 67, null, 71, null, 74, null, 76, null, null, null,
      72, null, 76, 72, 69, null, 72, null, 76, null, 79, null, 81, null, 79, null,
      77, null, 76, null, 74, null, 72, null, 74, null, 72, null, 72, null, null, null,
    ];
    const tick = () => {
      if (!this.musicOn) return;
      while (this.nextTime < this.ctx.currentTime + 0.25) {
        const s = this.step % 64;
        const chord = chords[Math.floor(s / 16)];
        const t = this.nextTime;
        // bass
        if (s % 4 === 0) this.tone(NOTE(chord[0]), t, spb * 1.8, { type: 'triangle', vol: 0.22, bus: this.musicBus });
        if (s % 4 === 2) this.tone(NOTE(chord[1] - 12), t, spb * 0.9, { type: 'triangle', vol: 0.12, bus: this.musicBus });
        // chord stabs on off-beats
        if (s % 4 === 2) chord.slice(1).forEach((n) => this.tone(NOTE(n), t, spb * 0.8, { type: 'sine', vol: 0.035, bus: this.musicBus }));
        // melody (plays every other loop for breathing room)
        const loop = Math.floor(this.step / 64) % 2;
        const m = melody[s];
        if (m && loop === 0) this.tone(NOTE(m), t, spb * 1.6, { type: 'square', vol: 0.035, bus: this.musicBus });
        if (m && loop === 1 && s % 2 === 0) this.tone(NOTE(m + 12), t, spb * 0.6, { type: 'sine', vol: 0.04, bus: this.musicBus });
        // light percussion
        if (s % 8 === 0) this.tone(140, t, 0.12, { type: 'sine', vol: 0.18, slideTo: 50, bus: this.musicBus });
        if (s % 8 === 4) this.noiseMusic(t, 0.09, 0.05, 2500);
        if (s % 2 === 1) this.noiseMusic(t, 0.03, 0.015, 8000);
        this.nextTime += spb;
        this.step++;
      }
      this.musicTimer = setTimeout(tick, 60);
    };
    tick();
  }

  noiseMusic(start, dur, vol, freq) {
    const c = this.ctx;
    const s = c.createBufferSource(); s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = freq;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    s.connect(f).connect(g).connect(this.musicBus);
    s.start(start); s.stop(start + dur + 0.02);
  }

  stopMusic() { this.musicOn = false; clearTimeout(this.musicTimer); }
}
