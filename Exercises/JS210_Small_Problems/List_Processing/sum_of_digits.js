/*

  Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

  Examples:

  sum(23);           // 5
  sum(496);          // 19
  sum(123456789);    // 45

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

    Transform number to string
    split string into characters
    map back into numbers
    reduce to its sum

*/

let sum = num => {
  return String(num).split('').map(chr => Number(chr)).reduce((sum, item) => sum + item);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
