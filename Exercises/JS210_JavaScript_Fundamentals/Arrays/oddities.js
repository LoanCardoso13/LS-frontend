/*

  The oddities function takes an array as an argument and returns a new array containing every other element from the input array. The values in the returned array are the first (index 0), third, fifth, and so on, elements of the input array. The program below uses the array returned by oddities as part of a comparison. Can you explain the results of these comparisons?

  Examples:

  function oddities(array) {
    const oddElements = [];

    for (let i = 0; i < array.length; i += 2) {
      oddElements.push(array[i]);
    }

    return oddElements;
  }

  oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
  oddities(['abc', 'def']) === ['abc'];         // false

  Solution:

  The Array object in JavaScript compares the whole object when using the === operator. It only returns true when the same object is referred to on both sides of the operation, by same object meaning same place in memory. In order to compare Arrays in terms of the values that they index, one option is to converto to String first, then compare.

*/

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

console.log(String(oddities([2, 3, 4, 5, 6])) === String([2, 4, 6]));      // false
console.log(String(oddities(['abc', 'def'])) === String(['abc']));         // false
