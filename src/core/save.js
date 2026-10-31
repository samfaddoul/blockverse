import { DEFAULT_AVATAR } from './catalog.js';

const KEY = 'blockverse.profile.v1';

export const DEFAULT_SETTINGS = {
  musicVolume: 0.45,
  sfxVolume: 0.75,
  sensitivity: 1,
  fov: 70,
  shadows: true,
  quality: 'high', // low | medium | high
  invertY: false,
  showFps: false,
};

function defaults() {
  return {
    name: 'Blocky' + Math.floor(1000 + Math.random() * 9000),
    level: 1,
    xp: 0,
    coins: 0,
    avatar: { ...DEFAULT_AVATAR },
    owned: [],
    gear: null,
    bestTime: null,
    stats: { coinsCollected: 0, obbyCompletions: 0, npcsMet: [], deaths: 0, playSeconds: 0 },
    settings: { ...DEFAULT_SETTINGS },
  };
}

export function loadProfile() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults();
    const data = JSON.parse(raw);
    const d = defaults();
    return {
      ...d,
      ...data,
      avatar: { ...d.avatar, ...(data.avatar || {}) },
      stats: { ...d.stats, ...(data.stats || {}) },
      settings: { ...d.settings, ...(data.settings || {}) },
      owned: Array.isArray(data.owned) ? data.owned : [],
    };
  } catch {
    return defaults();
  }
}

export function saveProfile(p) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* storage unavailable */ }
}

export function resetProfile() {
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
  return defaults();
}
