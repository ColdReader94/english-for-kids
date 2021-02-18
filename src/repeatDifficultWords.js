import cards from './assets/cards.js';
import title from './title.js';
import titleReverse from './titleReverse.js';
import items from './items.js';
import render from './render.js';
import image from './image.js';
import imageReverse from './imageReverse.js';
import playSound from './playSound.js';
import rotate from './rotate.js';
import trainingClickCount from './trainingClickCount.js';
import state from './state.js';

state.difficultWords = true;

const difficultWords = new Map();
let mapSorted;
let dificultWordsForRender;

function writeToMap(key, value) {
  let newKey = key.split('');
  newKey.splice(-6, 6);
  newKey = newKey.join('');
  difficultWords.set(newKey, value);
}

export default function repeatDifficultWords() {
  function sortByErrors(arr) {
    mapSorted = new Map([...arr.entries()].sort((a, b) => b[1] - a[1]));
  }
  const keys = Object.keys(localStorage);

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    // eslint-disable-next-line no-unused-expressions
    key.includes('errors') ? writeToMap(key, localStorage.getItem(key)) : false;
  }
  sortByErrors(difficultWords);
  mapSorted = Object.fromEntries(mapSorted);
  const maxErrors = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in mapSorted) {
    if (prop !== undefined) {
      maxErrors.push(prop);
    }
  }
  dificultWordsForRender = maxErrors.slice(0, 8);
}

repeatDifficultWords();

for (let i = 0; i < dificultWordsForRender.length; i += 1) {
  const searchTerm = dificultWordsForRender[i];
  items[i].index = i;
  for (let j = 0; j < 8; j += 1) {
    if (cards[1][j].find((elem) => elem.word === searchTerm)) {
      const foundedObj = cards[1][j].find((elem) => elem.word === searchTerm);
      items[i].removeEventListener('click', render);
      image[i].src = foundedObj.image;
      imageReverse[i].src = image[i].src;
      title[i].innerHTML = foundedObj.word;
      titleReverse[i].innerHTML = foundedObj.translation;
      const audio = document.createElement('audio');
      audio.classList.add('sound');
      audio.src = foundedObj.audioSrc;
      items[i].append(audio);
      const rotateIcon = document.createElement('div');
      items[i].addEventListener('click', playSound);
      items[i].addEventListener('click', trainingClickCount);
      rotateIcon.classList.add('rotate');
      items[i].querySelector('.front').append(rotateIcon);
      rotateIcon.addEventListener('click', rotate);
    }
  }
}

if (dificultWordsForRender.length < 8) {
  for (let i = 7; i > dificultWordsForRender.length - 1; i -= 1) {
    items[i].remove();
  }
}

if (dificultWordsForRender.length < 1) {
  document.querySelector('main').innerHTML = 'No words to repeat';
}
