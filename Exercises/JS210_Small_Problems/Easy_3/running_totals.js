/*

  Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

  Examples:

  runningTotal([2, 5, 13]);             // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
  runningTotal([3]);                    // [3]
  runningTotal([]);                     // []

*/

function runningTotal(arr) {
  let total = 0;
  let answer = [];

  for (let idx = 0; idx < arr.length; idx++) {
    total += arr[idx];
    answer[answer.length] = total;
  }

  return answer;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
