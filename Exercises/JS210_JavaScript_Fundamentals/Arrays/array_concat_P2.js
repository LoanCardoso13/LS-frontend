/*

  The concat function from the previous exercise could only concatenate a maximum of two arrays. For this exercise, you are going to extend that functionality. Refactor the concat function to allow for the concatenation of two or more arrays or values.

  Examples:

  concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
  concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]

*/

function concat(arr, ...rest) {
  let answer = arr;
  rest.forEach(
    ele => {
      twoElementsConcat(arr, ele);
    }
  )
  return answer;
}

function twoElementsConcat(array1, secondArgument) {
  let arr = array1;

  if (Array.isArray(secondArgument)) {
    for (let i = 0; i < secondArgument.length; i++) {
      arr.push(secondArgument[i]);
    }
  } else {
    arr.push(secondArgument);
  }

  return arr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
