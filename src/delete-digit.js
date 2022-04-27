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
  for (let i = 0; i < arr.length; i++) {
  if(arr[i] < arr[i] + 1){
    delete arr[i]
    let d = arr.join('')
    return Number(d)
  }else {
    delete arr[arr.length-1]
  }
  }
  return Number(d)
}

module.exports = {
  deleteDigit
};
