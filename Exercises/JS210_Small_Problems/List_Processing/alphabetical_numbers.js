/*

  Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

  zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

  Do not mutate the argument.

  Example:

  alphabeticNumberSort(
     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

    Sort input array with following criterion:
      Compare the return value of using elements as index of the constant array in outer scope

*/

const alphabeticNumbers = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let alphabeticNumberSort = arr => {
  copiedArr = [...arr];
  return copiedArr.sort((num1, num2) => {
    if (alphabeticNumbers[num1] > alphabeticNumbers[num2]) {
      return 1;
    } else {
      return -1;
    }
  })
}

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
