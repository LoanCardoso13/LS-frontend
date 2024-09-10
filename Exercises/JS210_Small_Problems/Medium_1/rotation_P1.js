/*

  Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

  If the input is not an array, return undefined.
  If the input is an empty array, return an empty array.
  Review the test cases below, then implement the solution accordingly.

  rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
  rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
  rotateArray(['a']);                    // ["a"]
  rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
  rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
  rotateArray([]);                       // []

  // return `undefined` if the argument is not an array
  rotateArray();                         // undefined
  rotateArray(1);                        // undefined


  // the input array is not mutated
  const array = [1, 2, 3, 4];
  rotateArray(array);                    // [2, 3, 4, 1]
  array;                                 // [1, 2, 3, 4]

PEDAC

Problem:

  input: array
  output: copy of input array with first element thrown to last place

Examples and test cases:

Data Structure:

  shallow object copy. Guard clauses for edge cases.

Algorithm:

  If the input is not an array, return undefined.
  If the input is an empty array, return an empty array.
  Copy input array to copyArr
  Shift array into element variable
  Push value from element variable into copyArr
  Return copyArr

*/

let rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let copyArr = [...arr];
  let element = copyArr.shift();
  copyArr.push(element);
  return copyArr;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
                                                                
// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
                                                                
                                                                
// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
