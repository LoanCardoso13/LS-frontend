/*

  Given an array nums of distinct integers sorted in ascending order, your task is to find the largest index j such that nums[j] is equal to j. If no such index exists, return -1.

  Example test cases:

  console.log(findLargestIndex([-1, 0, 2, 3]) === 3);
  console.log(findLargestIndex([0, 1, 2, 3, 4]) === 4);
  console.log(findLargestIndex([-5, 0, 3, 4, 7, 9]) === -1);
  console.log(findLargestIndex([-2, 0, 1, 3, 3, 5]) === 5);
  console.log(findLargestIndex([0]) === 0);

  // All test cases should log true.

*/

function findLargestIndex(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (
      arr[mid] === mid ||
      arr[mid] < mid
    ) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  let idx = left - 1;

  return idx === arr[idx] ? idx : -1;
}

// Most often, if the target is not found, additional handling
// or returning a specific value is needed. In many cases it will
// be the index that `left` variable holds, which would indicate
// where the target *would* fit into the array.

console.log(findLargestIndex([-1, 0, 2, 3]) === 3);
console.log(findLargestIndex([0, 1, 2, 3, 4]) === 4);
console.log(findLargestIndex([-5, 0, 3, 4, 7, 9]) === -1);
console.log(findLargestIndex([-2, 0, 1, 3, 3, 5]) === 5);
console.log(findLargestIndex([0]) === 0);
