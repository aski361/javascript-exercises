const reverseString = function(string) {
    let strLen = string.length-1;
    let reverseString = '';
    for(i=strLen;i>=0;i--) {
        reverseString += string[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
