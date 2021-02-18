import state from './state.js';
import items from './items.js';
import isRightWord from './isRightWord.js';
import randIntExcep from './randIntExcep.js';
import randomIntegerArr from './randomIntegerArr.js';

export default function chooseItem() {
  const repeatButton = document.querySelector('.btn');
  repeatButton.classList.add('repeat');
  repeatButton.removeEventListener('click', chooseItem);
  state.itemIndex = randIntExcep(0, 7, randomIntegerArr);
  function playNow() {
    items[state.itemIndex].querySelector('.sound').play();
  }
  playNow();
  repeatButton.addEventListener('click', playNow);
  document.body.addEventListener('click', isRightWord);
}
