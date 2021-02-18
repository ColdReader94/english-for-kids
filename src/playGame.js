import cards from './assets/cards.js';
import image from './image.js';
import imageReverse from './imageReverse.js';
import state from './state.js';
import items from './items.js';
import switchContainer from './switchContainer.js';
import hideTitleAndRotate from './hideTitleAndRotate.js';
import render from './render.js';
import playSound from './playSound.js';
import imgBig from './imgBig.js';
import chooseItem from './chooseItem.js';

export default function playGame() {
  if (state.gameMode) {
    hideTitleAndRotate();
  }
  if (document.querySelector('.stars img')) {
    Array.from(document.querySelectorAll('.stars img')).forEach((elem) => elem.remove());
    Array.from(document.querySelectorAll('.sound')).forEach((elem) => elem.remove());
    Array.from(document.querySelectorAll('.word-choosen')).forEach((elem) => elem.classList.remove('word-choosen'));
  }
  for (let i = 0; i < items.length; i += 1) {
    items[i].removeEventListener('click', render);
    image[i].src = cards[1][state.category][i].image;
    imageReverse[i].src = image[i].src;
    const audio = document.createElement('audio');
    audio.classList.add('sound');
    items[i].removeEventListener('click', playSound);
    audio.src = cards[1][state.category][i].audioSrc;
    items[i].append(audio);
  }
  const startButton = document.createElement('div');
  startButton.classList.add('btn');
  startButton.innerHTML = 'Start game';
  switchContainer.before(startButton);
  startButton.addEventListener('click', chooseItem);
  imgBig();
}
