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
function getDNSStats( domains ) {
  let result = {}
  let f =""
  
  for(let i of domains){
    const arr = i.split('.').reverse();
    console.log(arr)
    arr.forEach(e => {
      f += ('.') + e
      console.log(f)
      result[f] = result[f] ? result[f] += 1 : 1;
      console.log( result[f])
  
    });
    f =''
  }
  return result
}

module.exports = {
  getDNSStats
};
