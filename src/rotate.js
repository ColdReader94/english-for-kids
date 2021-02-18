import state from './state.js';
import items from './items.js';

export default function rotate(e) {
  state.itemIndex = e.target.closest('.item').index;
  items[state.itemIndex].classList.add('flip');
  items[state.itemIndex].addEventListener('mouseleave', () => {
    items[state.itemIndex].classList.remove('flip');
  });
}
