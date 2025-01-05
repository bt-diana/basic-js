const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  return names.reduce((newNames, fileName, index) => {
    if (index > 0 && newNames.slice(0, index).includes(fileName)) {
      const lastFileName = newNames.slice(0, index).findLast(
        (prevFileNames) => (
          prevFileNames.slice(0, -2) === fileName + '(' 
          && Number.isInteger(Number(prevFileNames.at(-2))) 
          && prevFileNames.at(-1) === ')'
        )
      );

      return [...newNames, lastFileName 
        ? fileName + '(' + (Number(lastFileName.at(-2)) + 1) + ')' 
        : fileName + '(1)'];
    }

    return [...newNames, fileName];
  }, []);
}

module.exports = {
  renameFiles
};
