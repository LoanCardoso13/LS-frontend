/*

  Given an array nums, sorted in ascending order (where elements are equal to or increase as you move through the array), determine if a specified number, target, appears more than three times in the array. The function should return true if target is found at least four times, and false otherwise.

  Example test cases:

  console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
  console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
  console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
  console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
  console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
  console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

  // All test cases should log true.

*/

let isTargetFrequent = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      left = mid;
      break;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  let count = 0;
  for (let idx = left - 3; idx <= left + 3; idx++) {
    if (arr[idx] === target) count++;
    if (count >= 4) return true;
  }
  return false;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);
