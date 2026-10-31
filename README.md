# Blockverse

A blocky 3D sandbox adventure built with Three.js: explore a floating island, meet villagers, collect coins, customise your avatar and beat the Sky Obby.

## Play

- **Quickest:** double-click `index.html`. The game is pre-built into `dist/game.js`, so it runs straight from the file.
- **Local server:** `npm install`, then `npm start`, then open http://localhost:5173
- **Developing:** `npm run dev` rebuilds `dist/game.js` whenever you save a file in `src/`. Run `npm run build` for a minified build.

## Controls

| Key | Action |
| --- | --- |
| WASD / arrow keys | Move (camera-relative) |
| Shift | Run |
| Space | Jump (tap for a short hop) |
| Mouse | Look around (cursor is hidden while playing; click the game if it shows) |
| Mouse wheel | Zoom |
| E | Talk to the nearest NPC |
| 1 / 2 | Equip Speed Coil / Gravity Coil |
| I | Inventory |
| C | Avatar editor and shop |
| Esc | Pause and free the cursor |

### On phones and tablets

Touch controls switch on automatically: drag your left thumb to move (push to the edge to run), drag anywhere else to look around, tap the jump button, and tap the 💬 prompt to talk. Landscape works best.

## Code layout

```
src/
  main.js              entry point
  game.js              game states, main loop, gameplay events
  core/                input, synthesized audio + music, third-person camera, save data, item catalog
  world/               island generation, merged-geometry batcher, AABB collision, procedural textures
  entities/            blocky avatar (model + animation), player controller, NPCs
  obby/                Sky Obby: moving, vanishing and spinning obstacles, lava, checkpoints, timer
  systems/             coins, particle effects, XP / levels / shop
  ui/                  menus, HUD, editor, item thumbnails
```

Progress (level, coins, items, avatar, best time, settings) is saved in the browser's localStorage.
