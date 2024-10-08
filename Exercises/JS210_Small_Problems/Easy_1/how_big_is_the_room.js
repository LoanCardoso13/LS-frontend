/*

  Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

  Note: 1 square meter == 10.7639 square feet

  Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

  Example:

  Enter the length of the room in meters:
  10
  Enter the width of the room in meters:
  7
  The area of the room is 70.00 square meters (753.47 square feet).

*/

let readlineSync = require('readline-sync');
let lengthMeters = Number(readlineSync.question('Enter the length of the room in meters: '));
let widthMeters = Number(readlineSync.question('Enter the width of the room in meters: '));

let areaMeters = lengthMeters * widthMeters;
let areaFeet = areaMeters * 10.7639;
console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet)`);
