const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let sum = 0
  for (let el of arr) {
    sum += el
  }
  return sum
};

const multiply = function(arr) {
  let multipliedRes = 1;
  for (let el of arr) {
    multipliedRes *= el
  }
  return multipliedRes
};


const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  let factorialResult = 1
	for (let i = 1; i <= num; i++) {
    factorialResult *= i
  }
  return factorialResult
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
