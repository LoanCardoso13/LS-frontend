/*

  Given an array of integers nums, find sum of all of its elements using recursion.

  Example test cases:

  console.log(sum([1,2,3]) === 6);
  console.log(sum([10, 15, 20, 10, 5]) === 60);
  console.log(sum([-5, -1, 5, 2, -3]) === -2);
  console.log(sum([7]) === 7);
  console.log(sum([]) === 0);

  // All test cases should log true.

*/

function sum(arr) {
  let answer = 0;

  function traverseFrom(idx) {
    if (idx === arr.length) return;

    traverseFrom(idx + 1);
    answer += arr[idx];
  }

  traverseFrom(0);
  return answer;
}

console.log(sum([1,2,3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);
