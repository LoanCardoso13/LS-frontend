/*

  Build a program that logs when the user will retire and how many more years the user has to work until retirement.

  Example:

  What is your age? 30
  At what age would you like to retire? 70

  It's 2017. You will retire in 2057.
  You have only 40 years of work to go!

*/

let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('What is your age? '));
let retirementAge = Number(readlineSync.question('At what age would you like to retire? '));

let date = new Date();
let currentYear = date.getFullYear();
let yearsToRetire = retirementAge - age;
let retirementYear = currentYear + yearsToRetire;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToRetire} years of work to go!`);
