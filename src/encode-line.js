const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const matches = str.matchAll(/(.)\1*/g);
  return matches 
  ? matches.reduce((encode, match) => (encode + (match[0].length > 1 ? match[0].length + match[1] : match[1])), '') 
  : str;
}

module.exports = {
  encodeLine
};
