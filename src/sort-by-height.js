const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(/* arr */) {
  const result = arr.map(el => el == -1 ? -1 : '$');
  const arrSort = arr.filter(el => el >= 0).sort((a, b) => a - b);
  
  result.forEach((e) => {
  e = e == -1 ? -1 : arrSort.shift()

});
console.log(result)

return(result)
}

module.exports = {
  sortByHeight
};
