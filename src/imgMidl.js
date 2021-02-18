import image from './image.js';
import imageReverse from './imageReverse.js';

export default function imgMidl() {
  image.forEach((img) => img.classList.remove('img-big'));
  image.forEach((img) => img.classList.add('img-middle'));
  imageReverse.forEach((img) => img.classList.add('img-middle'));
}
