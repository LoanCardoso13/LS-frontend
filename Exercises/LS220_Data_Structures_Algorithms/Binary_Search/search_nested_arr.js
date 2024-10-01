/*

  In this problem, you're presented with a nested array, matrix, which has two key characteristics:

  1. Each subarray in the matrix is sorted in ascending order.
  2. The first element of each subarray is larger than the final element of the preceding subarray.

  Your task is to determine whether a given integer, target, exists within this nested array.

  The time complexity of your solution should be O(log(M*N)).

  Example test cases:

  console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
  console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
  console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
  console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
  console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

  // All test cases should return true.

*/

function findInNestedArray(matrix, target) {
  let leftI = 0;
  let rightI = matrix.length - 1;

  while (leftI <= rightI) {
    let midI = Math.floor((leftI + rightI) / 2);

    if (matrix[midI][matrix[midI].length - 1] < target) {
      leftI = midI + 1;
    } else if (matrix[midI][0] > target) {
      rightI = midI - 1;
    } else {
      leftI = midI;
      break;
    }
  }
  if (leftI > matrix.length - 1) return false;


  let array = matrix[leftI];
  let leftJ = 0;
  let rightJ = array.length - 1;

  while (leftJ <= rightJ) {
    let midJ = Math.floor((leftJ + rightJ) / 2);

    if (array[midJ] === target) {
      return true;
    } else if (array[midJ] < target) {
      leftJ = midJ + 1;
    } else {
      rightJ = midJ - 1;
    }
  }

  return array[leftJ] === target;

}

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);
