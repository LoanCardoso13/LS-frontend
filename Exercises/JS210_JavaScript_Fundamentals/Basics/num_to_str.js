/*

  In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

  You will learn more about converting strings to numbers by writing a function that takes a positive integer or zero, and converts it to a string representation.

  You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

  Examples:

  integerToString(4321);      // "4321"
  integerToString(0);         // "0"
  integerToString(5000);      // "5000"

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

    Initialize answer to empty array.
    Do block while numberLeft is not zero
      Stringify last number of input and add to answer array
      (get from charcode the input remainder by 10 and push it to answer)
      Convert number to leftover from removing first digit
    Reverse answer
    Return joined answer with empty string joiner

*/

const ASCII_TO_INTEGER_DIFF = 48;

function integerToString(n) {
  let answer = [];
  do {
    answer.push(String.fromCharCode((n % 10) + ASCII_TO_INTEGER_DIFF));
    n = Math.floor(n / 10);
  } while (n !== 0)
  answer.reverse();
  return answer.join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
