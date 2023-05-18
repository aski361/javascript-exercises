const removeFromArray = function(array, n) {
    let newArray = array.splice(n-1,1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
