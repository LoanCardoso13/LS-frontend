/*

  Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

  Examples:

  Enter the 1st number: 25
  Enter the 2nd number: 15
  Enter the 3rd number: 20
  Enter the 4th number: 17
  Enter the 5th number: 23
  Enter the last number: 17

  The number 17 appears in [25, 15, 20, 17, 23].

  -----

  Enter the 1st number: 25
  Enter the 2nd number: 15
  Enter the 3rd number: 20
  Enter the 4th number: 17
  Enter the 5th number: 23
  Enter the last number: 18

  The number 18 does not appear in [25, 15, 20, 17, 23].

*/

let readlineSync = require('readline-sync');
let number1 = Number(readlineSync.question('Enter the 1st number: '));
let number2 = Number(readlineSync.question('Enter the 2nd number: '));
let number3 = Number(readlineSync.question('Enter the 3rd number: '));
let number4 = Number(readlineSync.question('Enter the 4th number: '));
let number5 = Number(readlineSync.question('Enter the 5th number: '));
let number6 = Number(readlineSync.question('Enter the last number: '));
let arr = [number1, number2, number3, number4, number5];

if (arr.includes(number6)) {
  console.log(`The number ${number6} appears in ${arr}.`);
} else {
  console.log(`The number ${number6} does not appear in ${arr}.`);
}
