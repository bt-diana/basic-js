const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("\'arr\' parameter must be an instance of the Array!");
  }

  let skipIteration = false;
  
  return arr.reduce((newArr, value, index) => {
    if (index > 0 && arr[index - 1] === '--discard-next') {
      return newArr;
    }

    switch (value) {
      case '--double-next':
        if (arr.length > index + 1) 
          newArr.push(arr[index + 1]);
        break;
      case '--double-prev':
        if (index - 1 >= 0 && (index - 2 < 0 || arr[index - 2] !== '--discard-next')) 
          newArr.push(arr[index - 1]);
        break;
      case '--discard-next':
        break;
      case '--discard-prev':
        if (newArr.length > 0 && (index - 2 < 0 || arr[index - 2] !== '--discard-next')) 
          newArr.pop();
        break;
      default:
        newArr.push(value);
        break;
    }

    return newArr;
  }, []);
}

module.exports = {
  transform
};
