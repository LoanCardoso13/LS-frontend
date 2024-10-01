/*

  Write a function that checks whether a given positive integer num is the result of an integer multiplied by itself, which is typically referred to as a square integer. The function should return true if num is a square integer, otherwise false. The implementation should not rely on any square root computation provided by built-in Math library.

  Examples test cases:

  console.log(isSquareInteger(1) === true);
  console.log(isSquareInteger(4) === true);
  console.log(isSquareInteger(16) === true);
  console.log(isSquareInteger(14) === false);
  console.log(isSquareInteger(25) === true);
  console.log(isSquareInteger(26) === false);

  // All test cases should log true.

*/

function isSquareInteger(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === n) {
      return true;
    } else if (mid * mid < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left * left === n;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);
