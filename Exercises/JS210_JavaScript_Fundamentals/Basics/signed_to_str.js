/*

  In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers.

  You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. You may, however, use the integerToString function from the previous exercise.

  Examples:

  signedIntegerToString(4321);      // "+4321"
  signedIntegerToString(-123);      // "-123"
  signedIntegerToString(0);         // "0"

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

*/

const ASCII_TO_INTEGER_DIFF = 48;

function integerToString(num) {
  let answer = [];
  do {
    answer.push(String.fromCharCode((num % 10) + ASCII_TO_INTEGER_DIFF));
    num = Math.floor(num / 10);
  } while (num !== 0);
  answer.reverse();
  return answer.join('');
}

function signedIntegerToString(signedInt) {
  let answer;
  if (signedInt > 0) {
    answer = '+' + integerToString(signedInt);
  } else if (signedInt < 0) {
    signedInt *= (-1);
    answer = '-' + integerToString(signedInt);
  } else {
    answer = integerToString(signedInt);
  }
  return answer;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
