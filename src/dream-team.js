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
function createDreamTeam( members ) {
 

  let newArr = [];
    
  if (!Array.isArray(members)) 
  return false
  
    for (let i = 0; i < members.length; i++) {
   
      if (typeof members[i] == "string") {
        members[i] = members[i].trim()
     
        let a = members[i][0].toUpperCase();
  
        newArr.push(a);
       }
    }
    let arr2 = newArr.sort();
  
    let a = arr2.join("");
  
    let result = [];
  
    result.push(a);
    return result;
  
};       


module.exports = {
  createDreamTeam
};
