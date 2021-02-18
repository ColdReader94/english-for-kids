/* eslint-disable no-param-reassign */
/* eslint-disable no-constant-condition */
import randomIntegerArr from './randomIntegerArr.js';

export default function randIntExcep(min, max, exp) {
  let n;
  exp = Array.isArray(exp) ? exp : [(isNaN(exp) ? min - 1 : exp)];
  while (true) {
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    if (exp.indexOf(n) < 0) {
      randomIntegerArr.push(n);
      return n;
    }
  }
}
