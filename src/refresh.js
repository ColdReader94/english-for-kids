import state from './state.js';
import menuItems from './menuItems.js';

export default function refresh(e) {
  state.errors = 0;
  document.querySelector('.active').classList.remove('active');
  // eslint-disable-next-line no-unused-expressions
  document.querySelector('.btn') ? document.querySelector('.btn').remove() : document.querySelector('.btn');
  Array.from(document.querySelectorAll('.rotate')).forEach((elem) => elem.remove());
  // eslint-disable-next-line no-unused-expressions
  e.target.closest('.item') ? state.category = e.target.closest('.item').index : state.category = e.target.closest('.header-item').index;
  menuItems[state.category].classList.add('active');
}
