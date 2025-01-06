const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const belowZero = {};
  return matrix.reduce((sum, row) => {
    return sum + row.reduce((rowSum, cell, cellIndex) => {
      if (cell === 0) {
        belowZero[cellIndex] = true;
      } else if (!belowZero[cellIndex]) {
        return rowSum + cell;
      }

      return rowSum;
    }, 0);
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
