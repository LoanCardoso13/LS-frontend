/*

  In this provided, you're given an array of numbers nums, and a specific integer k. Your objective is to compute the average value of each contiguous subarray of length k within the given array.

  Requirements:

  The input will be an array of numbers and an integer k.
  You need to find the average of every contiguous subarray of size k in the array.
  The output should be an array containing these averages.

  Example test cases:

  console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
  console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
  console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
  console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
  console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]

*/

function findAverages(arr, size) {
  let answer = [];
  let anchor = 0;
  let runner = 0;
  let sum = 0;

  while (runner <= arr.length) {
    if (runner < size) {
      sum += arr[runner];
    } else {
      answer.push(sum / size);
      sum -= arr[anchor];
      sum += arr[runner];
      anchor++;
    }
    runner++;
  }

  return answer;
}

function getAvg(arr) {
  return arr.reduce((sum, n) => sum + n) / arr.length;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
