/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
export default function resetStats() {
  const clearStorage = confirm('Do you want to reset statistics?');
  if (clearStorage) localStorage.clear();
  location.href = './stats.html';
}
