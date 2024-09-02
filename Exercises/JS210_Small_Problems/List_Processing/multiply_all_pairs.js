/*

  Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

  You may assume that neither argument will be an empty array.

  Example:

  multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

    Initialize empty combinedMutiplied array
    Iterate through elements of arr1
      Iterate through elements of arr2
        multiply elements from both arrays and push into combinedMutiplied
    Sort combinedMutiplied based on their number version

*/

let multiplyAllPairs = (arr1, arr2) => {
  let combinedMutiplied = [];

  arr1.forEach(ele1 => {
    arr2.forEach(ele2 => combinedMutiplied.push(ele1 * ele2));
  });

  return combinedMutiplied.sort((num1, num2) => {
    if (num1 > num2) {
      return 1;
    } else {
      return -1;
    }
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
