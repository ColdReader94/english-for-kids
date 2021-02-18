import cards from './assets/cards.js';
import state from './state.js';

export default function trainingClickCount(e) {
  if (state.difficultWords) return;
  const searchTerm = e.target.closest('.item').querySelector('.title').innerHTML;
  const foundedWord = cards[1][state.category].find((item) => item.word === searchTerm);
  if (!localStorage.getItem(foundedWord.word)) {
    localStorage.setItem(`${foundedWord.word}`, 1);
  } else {
    let tempCounter = Number(localStorage.getItem(foundedWord.word));
    tempCounter += 1;
    localStorage.setItem(`${foundedWord.word}`, tempCounter);
  }
}
