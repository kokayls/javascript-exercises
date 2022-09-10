const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(element => {
    sum += element
  });
  return sum;
};

const multiply = function(numbers) {
  let result = 1;
  numbers.forEach(number => {
    result *= number;
  });
  return result;
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(n) {
  let f = [];
  
	if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
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
