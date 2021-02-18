export default function playSound(e) {
  if (e.target !== e.target.closest('.rotate')) {
    const wav = e.target.closest('.item').querySelector('.sound');
    wav.currentTime = 0;
    wav.play();
  }
}
