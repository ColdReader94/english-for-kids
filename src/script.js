/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import './style.css';
import start from './start.js';
import switchMode from './switchMode.js';
import switchButton from './switchButton.js';

switchButton.addEventListener('click', switchMode);

start();
