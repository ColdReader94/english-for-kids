import image from './image.js';

export default function imgBig() {
  image.forEach((img) => img.classList.add('img-big'));
}
