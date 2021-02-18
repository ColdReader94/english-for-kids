/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import state from './state.js';

export default function gameFinish() {
  function win() {
    const winScreen = document.createElement('div');
    winScreen.classList.add('success');
    winScreen.textContent = 'You win!';
    setTimeout(() => {
      document.querySelector('.main').append(winScreen);
    }, 1000);
  }
  function lose() {
    const loseScreen = document.createElement('div');
    loseScreen.classList.add('failure');
    loseScreen.textContent = `You loose! You have ${state.errors} errors.`;
    setTimeout(() => {
      document.querySelector('.main').append(loseScreen);
    }, 1000);
  }
  document.querySelector('.btn').style.visibility = 'hidden';
  state.errors === 0 ? win() : lose();
  setTimeout(() => {
    location.reload();
  }, 3000);
}
