import cards from './assets/cards.js';
import state from './state.js';

export default function rightClickCount() {
  if (state.difficultWords) return;
  if (!localStorage.getItem(`${cards[1][state.category][state.itemIndex].word}right`)) {
    localStorage.setItem(`${cards[1][state.category][state.itemIndex].word}right`, 1);
  } else {
    let tempCounter = Number(localStorage.getItem(`${cards[1][state.category][state.itemIndex].word}right`));
    tempCounter += 1;
    localStorage.setItem(`${cards[1][state.category][state.itemIndex].word}right`, tempCounter);
  }
}
