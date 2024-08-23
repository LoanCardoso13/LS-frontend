/*

  Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

  Examples:

  showMultiplicativeAverage([3, 5]);                   // "7.500"
  showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

*/

function showMultiplicativeAverage(arr) {
  let sum = arr.reduce(
    (acc, cv) => acc * cv, 1
  );
  return (sum / arr.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
