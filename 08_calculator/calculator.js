const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total,current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((total,current) => a * b, 0)
};

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(n) {
  if(n==0) return n ;
  let product = 1;
  for(i=n;i>0;i--) {
    product *= n;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
