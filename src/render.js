import state from './state.js';
import menuItems from './menuItems.js';
import trainingGame from './trainingGame.js';
import playGame from './playGame.js';

export default function render(e) {
  if (document.querySelector('.sound')) {
    Array.from(document.querySelectorAll('.sound')).forEach((elem) => elem.remove());
  }
  state.itemIndex = null;
  state.errors = 0;
  document.querySelector('.active').classList.remove('active');
  // eslint-disable-next-line no-unused-expressions
  document.querySelector('.btn') ? document.querySelector('.btn').remove() : document.querySelector('.btn');
  Array.from(document.querySelectorAll('.rotate')).forEach((elem) => elem.remove());
  // eslint-disable-next-line no-unused-expressions
  e.target.closest('.item') ? state.category = e.target.closest('.item').index : state.category = e.target.closest('.header-item').index;
  menuItems[state.category].classList.add('active');
  if (!state.gameMode) trainingGame();
  else playGame();
}
