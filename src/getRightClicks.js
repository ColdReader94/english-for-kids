export default function getRightClicks(item) {
  return localStorage.getItem(item) ? localStorage.getItem(item) : 0;
}
