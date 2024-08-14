/*

  For this exercise we're going to learn more about type conversion by implementing our own parseInt function that converts a string of numeric characters (including an optional plus or minus sign) to a number.

  The function takes a string of digits as an argument, and returns the appropriate number. Do not use any of the built-in functions for converting a string to a number type.

  For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

  Examples:

  stringToInteger('4321');      // 4321
  stringToInteger('570');       // 570

  PEDAC

  Problem: create a simplified parseInt function that converts string of numeric characters to number. All input will be valid numeric characters without leading signs. Do not use built-in function for this.

  Examples and test cases:

    stringToInteger('4321');      // 4321
    stringToInteger('570');       // 570

  Data Structure:

  Algorithm:

    1) Split the string into each character/digit in an array. 
    2) Map the array into its ASCII values.
    2.1) Find the difference between ASCII digits from 0 to 9 and their literal meaning.
    3) Correct each element of the mapped/returned array into its literal corresponding digit.
    4) Reverse this array.
    5) Initialize answer local variable to zero. Iterate from zero to length of array/string minus one.
    6) At each iteration, add to answer itself plus array at iteration index times 10 to the power of said index.
    7) Return answer.

*/

const ASCII_TO_INTEGER_DIFF = 48;

function stringToInteger(characters) {
  let numbers_arr = [];
  for (let i = 0; i < characters.length; i++) {
    numbers_arr.push(characters.charCodeAt(i));
  }
  numbers_arr = numbers_arr.map( ele => ele - ASCII_TO_INTEGER_DIFF );
  numbers_arr.reverse();
  answer = 0;
  for (let i = 0; i < characters.length; i++) {
    answer += numbers_arr[i] * (10 ** i);
  }
  return answer
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
