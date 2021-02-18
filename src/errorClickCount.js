import cards from './assets/cards.js';
import state from './state.js';

export default function errorClickCount() {
  if (!localStorage.getItem(`${cards[1][state.category][state.itemIndex].word}errors`)) {
    localStorage.setItem(`${cards[1][state.category][state.itemIndex].word}errors`, 1);
  } else {
    let tempCounter = Number(localStorage.getItem(`${cards[1][state.category][state.itemIndex].word}errors`));
    tempCounter += 1;
    localStorage.setItem(`${cards[1][state.category][state.itemIndex].word}errors`, tempCounter);
  }
}
