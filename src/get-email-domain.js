const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let dd = email.split('')

  // console.log  (dd)

for(let i = 0; i <= dd.length; i++) {
if(dd[i] === '@'){
  return  (dd.slice([i+1]).join(''))
}

}

    
  }

module.exports = {
  getEmailDomain
};
