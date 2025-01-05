const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((dnsStats, domain) => {
    domain.split('.').reverse().reduce((prevSubDomain, currSubDomain) => {
      const subDomain = prevSubDomain + '.' + currSubDomain;
      if (dnsStats.hasOwnProperty(subDomain)) {
        dnsStats[subDomain]++;
      } else {
        dnsStats[subDomain] = 1;
      }
      return subDomain;
    }, '');
    
    return dnsStats;
  }, {});
}

module.exports = {
  getDNSStats
};
