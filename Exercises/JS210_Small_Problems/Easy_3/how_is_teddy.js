/*

  Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

  Example Output:

  Teddy is 69 years old!

*/

let teddyAge = Math.round(Math.random() * 180 + 20);

console.log(`Teddy is ${teddyAge} years old!`);
