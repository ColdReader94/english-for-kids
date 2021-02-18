import cards from './assets/cards.js';
import getTrainingClicks from './getTrainingClicks.js';
import getErrorsClicks from './getErrorsClicks.js';
import getRightClicks from './getRightClicks.js';
import getRightProcentage from './getRightProcentage.js';
import resetStats from './resetStats.js';
import start from './start.js';

start();

document.querySelector('.reset-stats').addEventListener('click', resetStats);

const table = document.querySelector('.table-stats');
const rows = [];
for (let i = 0; i < cards[0].length; i += 1) {
  const line = document.createElement('tr');
  const cells = [];
  for (let j = 0; j <= 6; j += 1) {
    const subCells = [];
    const cell = document.createElement('td');
    line.append(cell);
    cards[1][i].forEach(() => {
      const innerLine = document.createElement('tr');
      const innerCell = document.createElement('td');
      cell.append(innerLine);
      innerLine.append(innerCell);
      subCells.push(innerCell);
    });
    cells.push(subCells);
  }
  rows.push(cells);
  rows[i][0][0].textContent = cards[0][i];
  for (let k = 0; k < rows[i][1].length; k += 1) {
    rows[i][1][k].textContent = cards[1][i][k].word;
    rows[i][2][k].textContent = cards[1][i][k].translation;
    rows[i][3][k].textContent = getTrainingClicks(cards[1][i][k].word);
    rows[i][4][k].textContent = getErrorsClicks(`${cards[1][i][k].word}errors`);
    rows[i][5][k].textContent = getRightClicks(`${cards[1][i][k].word}right`);
    rows[i][6][k].textContent = getRightProcentage(`${cards[1][i][k].word}errors`, `${cards[1][i][k].word}right`);
  }
  table.append(line);
}

const emptyTableLines = Array.from(document.querySelectorAll('tr td:first-child tr:not(:first-child)'));

emptyTableLines.forEach((line) => line.remove());
