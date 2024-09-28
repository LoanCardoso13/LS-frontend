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