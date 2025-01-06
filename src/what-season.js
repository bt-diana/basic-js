const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    if (!(date instanceof Date && !isNaN(date.valueOf()))) {
      throw Error("Invalid date!");
    }
  } catch (err) {
    throw Error("Invalid date!");
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const seasonNumber = Math.floor(((date.getMonth() + 1) / 12 * 4)) % 4;
  return seasons[seasonNumber];
}

module.exports = {
  getSeason
};
