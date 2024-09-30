/*

  In this problem, you're given an array of integers nums and a target integer target. Your objective is to find the maximum sum that can be obtained by adding two distinct elements from the array, where this sum is less than the target.

  Requirements:

  * The input will be an array of integers, nums, and a target integer, target.
  * You need to find the maximum value of nums[i] + nums[j] where i != j and nums[i] + nums[j] < target.
  * If no such pair exists, return -1.
  
  Example test cases:

  console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
  console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
  console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
  console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
  console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
  console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
  console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
  // All test cases should log true

*/

function twoSumLessThanTarget(arr, target) {
  arr.sort((n1, n2) => n1 - n2);
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start < end) {
    currSum = arr[start] + arr[end]; 
    if (currSum >= target) {
      end--;
    } else {
      result = Math.max(result, currSum);
      start++;
    }
  }
  return result;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true
