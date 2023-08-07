const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  let sum = 0;
	for (let i = 0; i < array.length; i++) 
  {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let prod = 1;
	for (let i = 0; i < array.length; i++) 
  {
    prod *= array[i];
  }
  return prod;
};

const power = function(num, power) {
	let exponent = 1;
  for(let i = 0; i < power; i++){
    exponent = num * exponent;
  }
  return exponent;
};

const factorial = function(num) {
	let fact = 1;
  for(let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
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
