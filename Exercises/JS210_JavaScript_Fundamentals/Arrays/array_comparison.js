/*

  The array comparison function that we implemented in the Arrays lesson (Alternate link if the previous link doesn't work) implicitly assumed that when comparing two arrays, any matching values must also have matching index positions. The objective of this exercise is to reimplement the function so that two arrays containing the same values—but in a different order—are considered equal. For example, [1, 2, 3] === [3, 2, 1] should return true.

  Examples:

  function areArraysEqual(array1, array2) {
    // ...
  }

  areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
  areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
  areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
  areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
  areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
  areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
  areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
  areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
  areArraysEqual([1, 1, 1], [1, 1]);                     // false
  areArraysEqual([1, 1], [1, 1]);                        // true
  areArraysEqual([1, '1'], ['1', 1]);                    // true

*/

// function areArraysEqual(arr1, arr2) {
//   uniqArr1 = unique(arr1);
//   uniqArr2 = unique(arr2);
//
//   if (uniqArr1.length !== uniqArr2.length) return false;
//
//   for (let i = 0; i < uniqArr1.length; i++) {
//     if (!uniqArr1.includes(uniqArr2[i])) return false;
//   }
//   return true;
// }
//
// function unique(arr) {
//   let uniqArr = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqArr.includes(arr[i])) uniqArr.push(arr[i]);
//   }
//   return uniqArr;
// }

function areArraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr1.includes(arr2[i])) return false;
  }

  dummyArray = arr2.slice().sort();
  return String(arr1) === String(dummyArray);
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true
