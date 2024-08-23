/*

  Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

  Example

  ==> Enter the first number:
  23
  ==> Enter the second number:
  17
  ==> 23 + 17 = 40
  ==> 23 - 17 = 6
  ==> 23 * 17 = 391
  ==> 23 / 17 = 1
  ==> 23 % 17 = 6
  ==> 23 ** 17 = 1.4105003956066297e+23

  PEDAC

  Problem:

  Write a program of arithmetic operations, that calculates and displays several arithmetic operations from 2 input numbers

  input: 2 numbers
  output: 6 operations displayed

  Examples and test cases:

  ==> Enter the first number:
  23
  ==> Enter the second number:
  17
  ==> 23 + 17 = 40
  ==> 23 - 17 = 6
  ==> 23 * 17 = 391
  ==> 23 / 17 = 1
  ==> 23 % 17 = 6
  ==> 23 ** 17 = 1.4105003956066297e+23

  Data Structure:

  Local variables to reference the user input numbers.

  Algorithm:

  Get 1st number form user and store it in num1, get 2nd and store it in num2.
  Generate 6 interpolated strings with the operations and use them as arguments to console.log()

*/

let rlSync = require('readline-sync');
let num1 = Number(rlSync.question("==> Enter the first number: "));
let num2 = Number(rlSync.question("==> Enter the second number: "));

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
