const repeatString = function(string, n) {
    let fullString = '';
  for (let i=0;i<n;i++) {
    fullString += string;
  }
  return fullString;
};

console.log(repeatString('hey',3))

// Do not edit below this line
module.exports = repeatString;
