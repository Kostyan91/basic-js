const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  h = n.toString().split('').map(string => +string)
  console.log(h)
  ff = h.reduce((q,w) => q + w)
  
  
  
  
  
  if(ff > 9){
      let fff = ff.toString().split('').map(string => +string)
    console.log (fff)
      let  ffff = fff.reduce((q,w) => q + w)
    return ffff  
  }
  return ff
     }


module.exports = {
  getSumOfDigits
};
