import title from './title.js';

export default function hideTitleAndRotate() {
  title.forEach((elem) => elem.classList.add('hide'));
  const flip = Array.from(document.querySelectorAll('.rotate'));
  flip.forEach((elem) => elem.remove());
}
