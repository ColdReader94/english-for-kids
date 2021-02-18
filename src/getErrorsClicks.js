export default function getErrorsClicks(item) {
  return localStorage.getItem(item) ? localStorage.getItem(item) : 0;
}
