import state from './state.js';
import items from './items.js';
import randomIntegerArr from './randomIntegerArr.js';
import chooseItem from './chooseItem.js';
import gameFinish from './gameFinish.js';
import rightClickCount from './rightClickCount.js';
import errorClickCount from './errorClickCount.js';

export default function isRightWord(e) {
  if (items[state.itemIndex].contains(e.target)) {
    items[state.itemIndex].classList.add('word-choosen');
    rightClickCount();
    const fullfilledStar = document.createElement('img');
    fullfilledStar.src = './assets/img/star-win.svg';
    document.querySelector('.stars').append(fullfilledStar);
    const rightSound = document.querySelector('.right-sound');
    rightSound.currentTime = 0;
    rightSound.play();
    if (randomIntegerArr.length < 8) chooseItem();
    else gameFinish();
  } else if (!items[state.itemIndex].contains(e.target) && e.target.closest('.item')) {
    state.errors += 1;
    errorClickCount();
    const emptyStar = document.createElement('img');
    emptyStar.src = './assets/img/star.svg';
    document.querySelector('.stars').append(emptyStar);
    const errorSound = document.querySelector('.error-sound');
    errorSound.currentTime = 0;
    errorSound.play();
    if (state.errors > 7) gameFinish();
  }
}
