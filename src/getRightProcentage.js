export default function getRightProcentage(errors, right) {
  if (localStorage.getItem(errors) && localStorage.getItem(right)) {
    const totalClicks = Number(localStorage.getItem(errors)) + Number(localStorage.getItem(right));
    return `${(localStorage.getItem(right) / totalClicks) * 100}%`;
  }
  if (!localStorage.getItem(errors) && localStorage.getItem(right)) {
    return '100%';
  }
  return '0%';
}
