/*

  Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

  Examples:

  rotateRightmostDigits(735291, 1);      // 735291
  rotateRightmostDigits(735291, 2);      // 735219
  rotateRightmostDigits(735291, 3);      // 735912
  rotateRightmostDigits(735291, 4);      // 732915
  rotateRightmostDigits(735291, 5);      // 752913
  rotateRightmostDigits(735291, 6);      // 352917

PEDAC

Problem:

  input: number (integer).
  output: number with n digits to its right rotated.

  rules: to rotate by n digits means to pick the first digit in the nth place, counting from right to left, and move it to the last place, while moving forward, i.e. to the left, every digit after this one.

Examples and test cases:

  given

Data Structure:

  number -> string -> array conversions, then back. Process array with splice and unshift.

Algorithm:

  Convert input number to string, split into array, reverse it and assign to answerArr
  Splice answerArr at input n - 1 while extracting only element through bracket notation and assigning it to element variable
  unshift element variable into answerArr
  reverse answerArr, join elements and convert to number in order to return it

*/

let rotateRightmostDigits = (digits, n) => {
  let answerArr = String(digits).split("").reverse();
  let element = answerArr.splice(n - 1, 1);
  answerArr.unshift(element);
  return Number(answerArr.reverse().join(''));
}

console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917
