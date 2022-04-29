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
function encodeLine( str ) {
  let array = str.split('');
  let result = [];
  for(i = 0; i< array.length; i++){
    let duplicate = 1;
    let val = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (val === array[j]) {
        duplicate++;
        i++;
      }
      else break;

    }
    if (duplicate == 1) {
      result.push(val);
    }else
    result.push(duplicate  + val);
    console.log(duplicate)
    
  }

  return(result.join(''));
}
  

module.exports = {
  encodeLine
};
