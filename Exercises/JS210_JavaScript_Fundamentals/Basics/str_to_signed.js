/*

  The previous exercise mimics the parseInt function to a lesser extent. In this exercise, you're going to extend that function to work with signed numbers.

  Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

  You may assume the string will always contain a valid number.

  Examples:

  stringToSignedInteger('4321');      // 4321
  stringToSignedInteger('-570');      // -570
  stringToSignedInteger('+100');      // 100

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

*/

const ASCII_TO_INTEGER_DIFF = 48;

function stringToSignedInteger(characters) {
  let negative;
  [characters, negative] = unsignInteger(characters);
  let numbers_arr = [];

  for (let i = 0; i < characters.length; i++) {
    numbers_arr.push(characters.charCodeAt(i));
  }
  numbers_arr = numbers_arr.map( ele => ele - ASCII_TO_INTEGER_DIFF );
  numbers_arr.reverse();

  let answer = 0;
  for (let i = 0; i < characters.length; i++) {
    answer += numbers_arr[i] * (10 ** i);
  }

  if (negative) answer *= (-1);
  return answer;
}

function unsignInteger(characters) {
  let negative = false;
  if (characters[0] === '+') {
    characters = characters.slice(1);
  } else if (characters[0] === '-') {
    characters = characters.slice(1);
    negative = true;
  }
  return [characters, negative];
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
