export default function getTrainingClicks(item) {
  return localStorage.getItem(item) ? localStorage.getItem(item) : 0;
}
