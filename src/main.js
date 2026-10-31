import { Game } from './game.js';

const game = new Game();
window.blockverse = game; // handy for debugging from the console

game.init().catch((err) => {
  console.error(err);
  const t = document.getElementById('load-text');
  if (t) t.textContent = 'Oops — the game failed to start: ' + (err && err.message ? err.message : err) + '. Your browser may not support WebGL.';
});
