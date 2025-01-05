const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  return members && Array.isArray(members) ? members.reduce((teamName, memberName) => {
    if (typeof memberName === 'string' && memberName) {
      const char = memberName.trim().match(/^\S/)?.pop();
      if (char) teamName += char.toUpperCase();
    }
    return teamName;
  }, '').split('').sort((a, b) => (a.charCodeAt(0) - b.charCodeAt(0))).join('')
  : false;
}

module.exports = {
  createDreamTeam
};
