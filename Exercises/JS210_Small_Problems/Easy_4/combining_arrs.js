/*

  Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

  Example:

  union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

*/

function union(arr1, arr2) {
  let arr = [ ...arr1, ...arr2 ];

  return uniqueElems(arr);
}

function uniqueElems(arr) {
  let answer = [];

  for (let idx = 0; idx < arr.length; idx++) {
    if (!answer.includes(arr[idx])) answer.push(arr[idx]);
  }

  return answer;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
