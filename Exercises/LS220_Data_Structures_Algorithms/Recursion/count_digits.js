/*

  Create a recursive function that counts the number of digits in a given integer. The function should accept an integer and return the count of its digits. For instance, if the input is 12345, the function should return 5.

  Example test cases:

  console.log(countDigits(12345) === 5);
  console.log(countDigits(7) === 1);
  console.log(countDigits(100000) === 6);
  console.log(countDigits(99999) === 5);
  console.log(countDigits(0) === 1);

  // All test cases should log true.

*/

function countDigits(num) {
  if (num === 0) return 1;

  let count = 0;

  function divideByTen(num) {
    if (Math.floor(num) === 0) return;

    count++;
    divideByTen(num / 10);
  }

  divideByTen(num);

  return count;
}

console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);
