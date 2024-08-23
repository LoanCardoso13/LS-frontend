/*

  In this exercise, you will implement your own version of two Array methods: Array.prototype.pop and Array.prototype.push. The pop method removes the last element from an array and returns that element. If pop is called on an empty array, it returns undefined. The push method, on the other hand, adds one or more elements to the end of an array and returns the new length of the array.

  Examples:

  // pop
  const array1 = [1, 2, 3];
  pop(array1);                        // 3
  console.log(array1);                // [1, 2]
  pop([]);                           // undefined
  pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

  // push
  const array2 = [1, 2, 3];
  push(array2, 4, 5, 6);              // 6
  console.log(array2);                // [1, 2, 3, 4, 5, 6]
  push([1, 2], ['a', 'b']);          // 3
  push([], 1);                       // 1
  push([]);                          // 0

*/

function pop(arr) {
  if (arr.length === 0) return undefined;

  let lastElement = arr[arr.length - 1];
  arr.length -= 1;
  return lastElement;
}

function push(arr, ...addedElements) {
  addedElements.forEach(
    ele => {
      arr[arr.length] = ele;
    }
  );
  return arr.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0


