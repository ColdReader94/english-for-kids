import state from './state.js';
import items from './items.js';
import hideTitleAndRotate from './hideTitleAndRotate.js';
import trainingGame from './trainingGame.js';
import playGame from './playGame.js';

export default function switchMode() {
  state.gameMode = !state.gameMode;
  items.forEach((item) => item.classList.toggle('red'));
  document.querySelector('.menu').classList.toggle('menu-red');
  document.querySelector('.footer').classList.toggle('footer-red');
  if (state.category !== null) {
    hideTitleAndRotate();
    if (!state.gameMode) {
      // eslint-disable-next-line no-unused-expressions
      document.querySelector('.btn') ? document.querySelector('.btn').remove() : document.querySelector('.btn');
      trainingGame();
    } else playGame();
  }
}
