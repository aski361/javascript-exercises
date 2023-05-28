const palindromes = function (str) {
    let strNew = str.toLowerCase();
    let strBack = str.split('').reverse().join('').toLowerCase();
    for(let i=0;i<str.length;i++) {
        if(strBack[i] == strNew[i]) {
            return true;
        } else {
            return false;
        }
    }
};
  
  module.exports = palindromes;
  