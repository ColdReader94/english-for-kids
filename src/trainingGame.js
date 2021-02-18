import cards from './assets/cards.js';
import state from './state.js';
import title from './title.js';
import titleReverse from './titleReverse.js';
import items from './items.js';
import render from './render.js';
import image from './image.js';
import imageReverse from './imageReverse.js';
import playSound from './playSound.js';
import isRightWord from './isRightWord.js';
import rotate from './rotate.js';
import imgMidl from './imgMidl.js';
import trainingClickCount from './trainingClickCount.js';

export default function trainingGame() {
  if (title[0].classList.contains('hide')) title.forEach((elem) => elem.classList.remove('hide'));
  if (document.querySelector('.sound')) {
    Array.from(document.querySelectorAll('.stars img')).forEach((elem) => elem.remove());
    Array.from(document.querySelectorAll('.sound')).forEach((elem) => elem.remove());
    Array.from(document.querySelectorAll('.word-choosen')).forEach((elem) => elem.classList.remove('word-choosen'));
    document.body.removeEventListener('click', isRightWord);
  }
  for (let i = 0; i < items.length; i += 1) {
    items[i].removeEventListener('click', render);
    image[i].src = cards[1][state.category][i].image;
    imageReverse[i].src = image[i].src;
    title[i].innerHTML = cards[1][state.category][i].word;
    titleReverse[i].innerHTML = cards[1][state.category][i].translation;
    const audio = document.createElement('audio');
    audio.classList.add('sound');
    audio.src = cards[1][state.category][i].audioSrc;
    items[i].append(audio);
    const rotateIcon = document.createElement('div');
    items[i].addEventListener('click', playSound);
    items[i].addEventListener('click', trainingClickCount);
    rotateIcon.classList.add('rotate');
    items[i].querySelector('.front').append(rotateIcon);
    rotateIcon.addEventListener('click', rotate);
  }
  imgMidl();
}
