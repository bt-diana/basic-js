const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const n = matrix.length;
  const m = matrix[0]?.length ?? 0;
  return Array.from({length: n}, 
    (rowValue, rowIndex) => (
      Array.from({length: m}, (cellValue, cellIndex) => {
        let sum = 0;
        for (const i of [rowIndex - 1, rowIndex, rowIndex + 1]) {
          for (const j of [cellIndex - 1, cellIndex, cellIndex + 1]) {
            sum += matrix[i] ? matrix[i][j] ?? 0 : 0;
          }
        }
        sum -= matrix[rowIndex][cellIndex] ?? 0;

        return sum;
      })
  ));
}

module.exports = {
  minesweeper
};
