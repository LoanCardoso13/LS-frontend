/*

  In this exercise, you will implement your own versions of the Array.prototype.shift and Array.prototype.unshift methods. These methods manipulate the contents of an array starting from the first index.

  The shift method removes the first element from an array and returns that element; if the array is empty, shift returns undefined. The unshift method adds one or more elements to the start of an array and returns the new length of the array. Both methods mutate the original array.

  Examples:

  shift([1, 2, 3]);                // 1
  shift([]);                       // undefined
  shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

  unshift([1, 2, 3], 5, 6);        // 5
  unshift([1, 2, 3]);              // 3
  unshift([4, 5], [1, 2, 3]);      // 3

  const testArray = [1, 2, 3];
  shift(testArray);                // 1
  testArray;                       // [2, 3]
  unshift(testArray, 5);           // 3
  testArray;                       // [5, 2, 3]

*/

function shift(arr) {
  if (arr.length === 0) return undefined;

  let answer = arr[0];
  for (let idx = 1; idx < arr.length; idx++) {
    arr[idx - 1] = arr[idx];
  }
  arr.pop();
  return answer;
}

function unshift(arr, ...addedElments) {
  addedElments.forEach(
    addedElement => {
      oneElementUnshift(arr, addedElement);
    }
  );
  return arr.length;
}

function oneElementUnshift(arr, ele) {
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    arr[idx + 1] = arr[idx];
  }
  arr[0] = ele;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
