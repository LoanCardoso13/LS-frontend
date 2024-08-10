/*

Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

*/

let readlineSync = require('readline-sync');
let seqLimit = readlineSync.question('Please enter an integer greater than 0: ');
let choice = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let seqArr = [];
for (let i = 1; i <= seqLimit; i++) {
  seqArr.push(i);
}

if (choice === 's') {
  sum = seqArr.reduce((acc, cv) => acc + cv, 0);
  console.log(`The sum of the integers between 1 and ${seqLimit} is ${sum}.`);
} else if (choice === 'p') {
  product = seqArr.reduce((acc, cv) => acc * cv, 1);
  console.log(`The product of the integers between 1 and ${seqLimit} is ${product}.`)
} else {
  console.log('Invalid choice, bye!')
}
