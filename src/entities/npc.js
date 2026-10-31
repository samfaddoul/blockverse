import * as THREE from 'three';
import { Avatar } from './avatar.js';

// Friendly residents of the island. `action` hooks into game systems.
export const NPC_DEFS = [
  { name: 'Mayor Brickley', area: 'plaza', idx: 0, wander: 0, avatar: { skin: '#EAB98A', shirt: '#3949AB', pants: '#212121', hair: 'short', hairColor: '#E8E8E8', face: 'happy', hat: 'tophat', accessory: 'none' },
    lines: ['Welcome to Blockverse, friend!', 'Collect coins all over the island to level up and buy cool stuff.', 'Feeling brave? The Sky Obby is east of here — follow the red sign!', 'Press C anytime to open your Avatar Editor.'] },
  { name: 'Pixel', area: 'plaza', idx: 1, wander: 9, avatar: { skin: '#FFDCB5', shirt: '#D81B60', pants: '#5E35B1', hair: 'buns', hairColor: '#EC407A', face: 'grin', hat: 'none', accessory: 'backpack' },
    lines: ['Hiii! Did you know you can run by holding Shift?', 'Tip: you can let go of Space early for a tiny hop!', 'I found a coin on top of the fountain once. Shhh.'] },
  { name: 'Coach Stud', area: 'plaza', idx: 2, wander: 6, action: 'obby', avatar: { skin: '#8D5524', shirt: '#E53935', pants: '#FFFFFF', hair: 'none', hairColor: '#2B1B12', face: 'determined', hat: 'cap', accessory: 'none' },
    lines: ['The Sky Obby is no joke. Checkpoints save your progress!', 'Watch out for the spinners and do NOT touch the lava.', 'Beat it fast and I\'ll be very impressed. Best times are saved!'] },
  { name: 'Baker Bea', area: 'village', idx: 0, wander: 5, avatar: { skin: '#F5C99B', shirt: '#FFFFFF', pants: '#6D4C41', hair: 'bob', hairColor: '#D7A35E', face: 'smile', hat: 'none', accessory: 'scarf' },
    lines: ['Fresh bread! Well... fresh blocks of bread.', 'The windmill in Flower Meadow grinds all my flour.', 'Have you climbed the roofs? There are coins up there!'] },
  { name: 'Shopkeeper Sol', area: 'village', idx: 1, wander: 0, action: 'shop', avatar: { skin: '#C68642', shirt: '#FFB300', pants: '#3E2723', hair: 'curly', hairColor: '#2B1B12', face: 'grin', hat: 'cowboy', accessory: 'none' },
    lines: ['Looking sharp! Want to browse my wares?', 'Opening the Avatar Shop for you now!'] },
  { name: 'Grandpa Oak', area: 'village', idx: 2, wander: 3, avatar: { skin: '#D69E6F', shirt: '#6D4C41', pants: '#546E7A', hair: 'short', hairColor: '#E8E8E8', face: 'sleepy', hat: 'beanie', accessory: 'glasses' },
    lines: ['Back in my day, bricks only came in grey.', 'The Whispering Woods are west. Lovely campfire there.', 'zzz... oh! Hello there.'] },
  { name: 'Ziggy', area: 'village', idx: 3, wander: 10, avatar: { skin: '#FFDCB5', shirt: '#7CB342', pants: '#1E88E5', hair: 'spiky', hairColor: '#29B6F6', face: 'silly', hat: 'none', accessory: 'none' },
    lines: ['Race you to the lake! Just kidding, I walk slowly.', 'Ever tried the Gravity Coil? You can jump to the moon!'] },
  { name: 'Ranger Fern', area: 'forest', idx: 0, wander: 8, avatar: { skin: '#A86B3C', shirt: '#2E9E57', pants: '#6D4C41', hair: 'ponytail', hairColor: '#4E342E', face: 'happy', hat: 'cowboy', accessory: 'backpack' },
    lines: ['Shh, listen... the woods are whispering.', 'Some trees hide coins in their leaves. Jump up and look!', 'Mind the mushrooms — they make great platforms.'] },
  { name: 'Marina', area: 'lake', idx: 0, wander: 6, avatar: { skin: '#F5C99B', shirt: '#00ACC1', pants: '#FFFFFF', hair: 'long', hairColor: '#F6E27F', face: 'wink', hat: 'none', accessory: 'none' },
    lines: ['The water is only knee-deep. Go for a paddle!', 'Hop across the lily pads — each one has a coin!'] },
  { name: 'Climber Kai', area: 'hills', idx: 0, wander: 7, avatar: { skin: '#6B3E1E', shirt: '#FF7043', pants: '#37474F', hair: 'mohawk', hairColor: '#C62828', face: 'determined', hat: 'none', accessory: 'backpack' },
    lines: ['Climb the lookout tower for the best view on the island.', 'Three coins wait at the very top!'] },
  { name: 'Daisy', area: 'meadow', idx: 0, wander: 8, avatar: { skin: '#FFDCB5', shirt: '#F48FB1', pants: '#8E24AA', hair: 'long', hairColor: '#FF7043', face: 'happy', hat: 'none', accessory: 'wings' },
    lines: ['Aren\'t the flowers beautiful today?', 'The bees here make the sweetest honey blocks.'] },
  { name: 'Farmer Joe', area: 'meadow', idx: 1, wander: 4, avatar: { skin: '#EAB98A', shirt: '#1E88E5', pants: '#A1887F', hair: 'short', hairColor: '#8D6E63', face: 'smile', hat: 'cowboy', accessory: 'none' },
    lines: ['That windmill has been spinning for a hundred years.', 'There is a coin on the very top of it, if you can get there!'] },
];

const HW = 0.5, H = 2.6;

export class NPC {
  constructor(scene, col, def, x, z) {
    this.def = def;
    this.name = def.name;
    this.col = col;
    this.avatar = new Avatar(def.avatar);
    scene.add(this.avatar.root);
    const gy = Math.max(0, col.groundHeight(x, z, 50));
    this.home = new THREE.Vector3(x, gy, z);
    this.pos = this.home.clone();
    this.vel = new THREE.Vector3();
    this.yaw = Math.random() * Math.PI * 2;
    this.state = 'idle';
    this.timer = 1 + Math.random() * 3;
    this.target = null;
    this.talkTimer = 0;
    this.lineIdx = 0;
    this.grounded = true;
    this.stuck = 0;
    this.lookAt = null;
    this.avatar.root.position.copy(this.pos);
  }

  nextLine() {
    const l = this.def.lines[this.lineIdx % this.def.lines.length];
    this.lineIdx++;
    return l;
  }

  talk(playerPos) {
    this.talkTimer = 5;
    this.lookAt = playerPos.clone();
    this.state = 'idle';
    this.vel.set(0, 0, 0);
    this.avatar.doWave(1.2);
  }

  pickTarget() {
    const w = this.def.wander;
    if (!w) return null;
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2, d = 2 + Math.random() * w;
      const x = this.home.x + Math.cos(a) * d, z = this.home.z + Math.sin(a) * d;
      const gh = this.col.groundHeight(x, z, this.pos.y + 1.1);
      if (gh > -0.1 && Math.abs(gh - this.pos.y) <= 1.05) return new THREE.Vector3(x, gh, z);
    }
    return null;
  }

  update(dt) {
    let speed = 0;
    if (this.talkTimer > 0) {
      this.talkTimer -= dt;
      if (this.lookAt) {
        const target = Math.atan2(this.lookAt.x - this.pos.x, this.lookAt.z - this.pos.z);
        let d = Math.atan2(Math.sin(target - this.yaw), Math.cos(target - this.yaw));
        this.yaw += d * (1 - Math.exp(-8 * dt));
      }
    } else if (this.state === 'idle') {
      this.timer -= dt;
      if (this.timer <= 0) {
        this.target = this.pickTarget();
        if (this.target) { this.state = 'walk'; this.stuck = 0; }
        else this.timer = 2 + Math.random() * 3;
      }
    } else if (this.state === 'walk') {
      const dx = this.target.x - this.pos.x, dz = this.target.z - this.pos.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 0.6 || this.stuck > 1.2) {
        this.state = 'idle'; this.timer = 2 + Math.random() * 4; this.vel.x = this.vel.z = 0;
      } else {
        const sp = 3.6;
        this.vel.x = (dx / dist) * sp; this.vel.z = (dz / dist) * sp;
        const target = Math.atan2(dx, dz);
        const d = Math.atan2(Math.sin(target - this.yaw), Math.cos(target - this.yaw));
        this.yaw += d * (1 - Math.exp(-6 * dt));
      }
    }
    if (this.state === 'walk' || !this.grounded) {
      this.vel.y -= 40 * dt;
      const before = this.pos.clone();
      const res = this.col.move(this.pos, this.vel, dt, HW, H, { wasGrounded: this.grounded });
      this.grounded = res.grounded;
      const moved = Math.hypot(this.pos.x - before.x, this.pos.z - before.z);
      speed = moved / Math.max(dt, 1e-4);
      if (this.state === 'walk' && speed < 0.8) this.stuck += dt; else this.stuck = 0;
      if (this.pos.y < -5) { this.pos.copy(this.home); this.vel.set(0, 0, 0); }
    }
    this.avatar.root.position.lerp(this.pos, 1 - Math.exp(-20 * dt));
    this.avatar.root.rotation.y = this.yaw;
    this.avatar.update(dt, { speed, grounded: this.grounded, vy: this.vel.y, runRatio: 0 });
  }

  get headPos() { return new THREE.Vector3(this.avatar.root.position.x, this.avatar.root.position.y + 3.4, this.avatar.root.position.z); }
}

export function spawnNPCs(scene, col, npcSpots) {
  return NPC_DEFS.map((d) => {
    const spots = npcSpots[d.area] || [[0, 0]];
    const [x, z] = spots[d.idx % spots.length];
    return new NPC(scene, col, d, x, z);
  });
}
