/*

  Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

  Examples:

  sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
  sumOfSums([4]);              // 4
  sumOfSums([1, 2, 3, 4, 5]);  // 35

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

    reduce the input array with the following callback function:
      params total, item, idx
      sum total with input array sliced from 0 to idx reduced to its sum

*/

let sumOfSums = arr => {
  return arr.reduce((total, num, idx) => total + arr.slice(0, idx + 1).reduce((sum, item) => sum + item), 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
