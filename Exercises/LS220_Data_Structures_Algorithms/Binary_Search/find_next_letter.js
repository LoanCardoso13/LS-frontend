/*

  You're given an array, chars, of lowercase English letters sorted in ascending order, and a lowercase letter, key. Your task is to find the smallest letter in chars that is lexicographically greater than key. If no such letter exists, return the first letter in chars.

  Example test cases:

  console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
  console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
  console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
  console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
  console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
  console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
  // All test cases should log true.

*/

function findNextLetter(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return arr[mid + 1] || arr[0];
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

  }

  // Most often, if the target is not found, additional handling
  // or returning a specific value is needed. In many cases it will
  // be the index that `left` variable holds, which would indicate
  // where the target *would* fit into the array.

  return arr[left] || arr[0];
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.
