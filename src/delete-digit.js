const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let arr = n.toString().split('')
  let min = Math.min(...arr);
  let d = arr.filter(e =>  e != min  ).filter(e =>  e != 0  ).join('');
  return Number(d)
}

module.exports = {
  deleteDigit
};
