import { FACES, HAIRS, HATS, ACCESSORIES, GEAR } from '../core/catalog.js';

export const xpToNext = (level) => 60 + level * 40;

export const XP = { coin: 5, npc: 20, checkpoint: 15, obby: 120, obbyBest: 60 };

// Handles XP, levels, coins and item ownership on the saved profile.
export class Progression {
  constructor(profile, save) {
    this.p = profile;
    this.save = save;
    this.listeners = [];
  }
  onChange(fn) { this.listeners.push(fn); }
  changed(evt) { this.save(); this.listeners.forEach((f) => f(evt)); }

  addXP(n) {
    const p = this.p;
    p.xp += n;
    let gained = 0;
    while (p.xp >= xpToNext(p.level)) { p.xp -= xpToNext(p.level); p.level++; gained++; }
    this.changed({ type: 'xp', amount: n, levelUp: gained > 0, level: p.level });
    return gained;
  }

  addCoins(n) { this.p.coins += n; this.changed({ type: 'coins', amount: n }); }

  owns(cat, id) {
    const item = findAny(cat, id);
    if (!item) return false;
    if (cat !== 'gear' && item.price === 0) return true;
    return this.p.owned.includes(`${cat}:${id}`);
  }

  canBuy(cat, id) {
    const item = findAny(cat, id);
    if (!item) return { ok: false, why: 'Unknown item' };
    if (this.owns(cat, id)) return { ok: false, why: 'Owned' };
    if (this.p.level < item.level) return { ok: false, why: `Reach level ${item.level}` };
    if (this.p.coins < item.price) return { ok: false, why: `Need ${item.price - this.p.coins} more coins` };
    return { ok: true };
  }

  buy(cat, id) {
    const chk = this.canBuy(cat, id);
    if (!chk.ok) return chk;
    const item = findAny(cat, id);
    this.p.coins -= item.price;
    this.p.owned.push(`${cat}:${id}`);
    this.changed({ type: 'buy', cat, id });
    return { ok: true };
  }

  // The next thing that unlocks at a higher level — shown on the profile card.
  nextUnlock() {
    const all = [
      ...FACES.map((i) => ['face', i]), ...HAIRS.map((i) => ['hair', i]), ...HATS.map((i) => ['hat', i]),
      ...ACCESSORIES.map((i) => ['accessory', i]), ...GEAR.map((i) => ['gear', i]),
    ].filter(([, i]) => i.level > this.p.level).sort((a, b) => a[1].level - b[1].level);
    return all[0] ? { cat: all[0][0], item: all[0][1] } : null;
  }
}

function findAny(cat, id) {
  const lists = { face: FACES, hair: HAIRS, hat: HATS, accessory: ACCESSORIES, gear: GEAR };
  return lists[cat]?.find((i) => i.id === id);
}
