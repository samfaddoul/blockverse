// Everything the player can wear. `price` is in coins, `level` is the unlock level.

export const SKIN_COLORS = [
  '#FFDCB5', '#F5C99B', '#EAB98A', '#D69E6F', '#C68642', '#A86B3C',
  '#8D5524', '#6B3E1E', '#4A2A14', '#F8D25C', '#B8E0F5', '#C9F2C1',
];

export const CLOTH_COLORS = [
  '#E53935', '#FF7043', '#FFB300', '#FDD835', '#7CB342', '#2E9E57',
  '#00ACC1', '#1E88E5', '#3949AB', '#5E35B1', '#8E24AA', '#D81B60',
  '#F48FB1', '#FFFFFF', '#B0BEC5', '#546E7A', '#37474F', '#212121',
  '#6D4C41', '#A1887F',
];

export const HAIR_COLORS = [
  '#2B1B12', '#4E342E', '#8D6E63', '#D7A35E', '#F6E27F', '#E8E8E8',
  '#C62828', '#FF7043', '#EC407A', '#7E57C2', '#29B6F6', '#43A047',
];

export const FACES = [
  { id: 'smile', name: 'Classic Smile', price: 0, level: 1 },
  { id: 'grin', name: 'Big Grin', price: 0, level: 1 },
  { id: 'happy', name: 'Joyful', price: 0, level: 1 },
  { id: 'wink', name: 'Winky', price: 25, level: 1 },
  { id: 'cool', name: 'Shades', price: 40, level: 2 },
  { id: 'surprised', name: 'Gasp', price: 30, level: 1 },
  { id: 'determined', name: 'Determined', price: 50, level: 3 },
  { id: 'sleepy', name: 'Sleepy', price: 35, level: 2 },
  { id: 'silly', name: 'Silly', price: 60, level: 4 },
  { id: 'star', name: 'Starstruck', price: 120, level: 5 },
];

export const HAIRS = [
  { id: 'none', name: 'Bald', price: 0, level: 1 },
  { id: 'short', name: 'Short Cut', price: 0, level: 1 },
  { id: 'spiky', name: 'Spiky', price: 0, level: 1 },
  { id: 'long', name: 'Long Hair', price: 0, level: 1 },
  { id: 'bob', name: 'Bob', price: 30, level: 1 },
  { id: 'ponytail', name: 'Ponytail', price: 40, level: 2 },
  { id: 'mohawk', name: 'Mohawk', price: 60, level: 3 },
  { id: 'curly', name: 'Curly', price: 50, level: 2 },
  { id: 'buns', name: 'Space Buns', price: 80, level: 4 },
];

export const HATS = [
  { id: 'none', name: 'No Hat', price: 0, level: 1 },
  { id: 'cap', name: 'Baseball Cap', price: 0, level: 1 },
  { id: 'beanie', name: 'Cozy Beanie', price: 30, level: 1 },
  { id: 'tophat', name: 'Top Hat', price: 60, level: 2 },
  { id: 'cowboy', name: 'Ranch Hat', price: 75, level: 3 },
  { id: 'headphones', name: 'Headphones', price: 90, level: 3 },
  { id: 'cone', name: 'Traffic Cone', price: 50, level: 2 },
  { id: 'crown', name: 'Golden Crown', price: 250, level: 6 },
  { id: 'halo', name: 'Halo', price: 300, level: 8 },
];

export const ACCESSORIES = [
  { id: 'none', name: 'Nothing', price: 0, level: 1 },
  { id: 'backpack', name: 'Backpack', price: 0, level: 1 },
  { id: 'glasses', name: 'Nerd Glasses', price: 25, level: 1 },
  { id: 'scarf', name: 'Scarf', price: 40, level: 2 },
  { id: 'cape', name: 'Hero Cape', price: 120, level: 4 },
  { id: 'sword', name: 'Foam Sword', price: 90, level: 3 },
  { id: 'wings', name: 'Angel Wings', price: 220, level: 7 },
];

// Gear goes in the hotbar and changes how you play.
export const GEAR = [
  { id: 'speed', name: 'Speed Coil', desc: 'Run 40% faster', price: 80, level: 2, color: '#29B6F6', key: '1' },
  { id: 'gravity', name: 'Gravity Coil', desc: 'Jump way higher', price: 150, level: 4, color: '#AB47BC', key: '2' },
];

export const CATEGORIES = {
  face: FACES, hair: HAIRS, hat: HATS, accessory: ACCESSORIES,
};

export const DEFAULT_AVATAR = {
  skin: '#F5C99B',
  shirt: '#1E88E5',
  pants: '#37474F',
  hair: 'short',
  hairColor: '#4E342E',
  face: 'smile',
  hat: 'none',
  accessory: 'none',
};

export function findItem(cat, id) {
  if (cat === 'gear') return GEAR.find((g) => g.id === id);
  return CATEGORIES[cat]?.find((i) => i.id === id);
}

export function itemKey(cat, id) { return `${cat}:${id}`; }
