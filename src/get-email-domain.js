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
  // for(let i = 0; i <= email.length; i++) {
  //   if(email[i] === '@'){
    //  return  email.slice(email.lastIndexOf('@') + 1);
         
      
    
  //   }
  const emails = email.split('@');
  return emails[emails.length - 1];
    
  }

module.exports = {
  getEmailDomain
};
    