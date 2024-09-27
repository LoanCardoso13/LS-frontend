/*

  Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

  You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

  Your solution should not mutate the input arrays.

  Examples:

  merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
  merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
  merge([], [1, 4, 5]);             // [1, 4, 5]
  merge([1, 4, 5], []);             // [1, 4, 5]

  Problem: 

    Use two sorted arrays provided as input to build, element by element, a new array with all elements from both arrays in proper (sorted) order. Must not mutate input arrays.

  Algorithm (FAIL):

    Initialize answer array as empty
    Make copies of input arrays
    While answer array length is less than sum of lenghts of input arrays
      If the first value from any of the copied arrays is undefined
        push the other copied array to answer array and flatten it
      Compare first values of copied input arrays
        Whichever is smaller, shift it to answer array
    Return answer array

*/

function merge(arr1, arr2) {
  if (arr1.length === 0) return arr2.slice();
  if (arr2.length === 0) return arr1.slice();

  let answer = [];
  let arr1Copy = arr1.slice();
  let arr2Copy = arr2.slice();
  while (answer.length < (arr1.length + arr2.length)) {
    answer.push(arr1Copy[0] < arr2Copy[0] ? arr1Copy.shift() : arr2Copy.shift());
    if (arr1Copy.length === 0 || arr2Copy.length === 0) answer = answer.concat(arr1Copy, arr2Copy);
  }
  return answer
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
