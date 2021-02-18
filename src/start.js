import items from './items.js';
import image from './image.js';
import title from './title.js';
import menuItems from './menuItems.js';
import cards from './assets/cards.js';
import render from './render.js';

export default function start() {
  for (let i = 0; i < items.length; i += 1) {
    image[i].src = cards[1][i][0].image;
    title[i].innerHTML = cards[0][i];
    items[i].index = i;
    menuItems[i].index = i;
    items[i].addEventListener('click', render);
    menuItems[i].addEventListener('click', render);
  }
}
