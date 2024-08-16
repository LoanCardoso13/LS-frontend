/*

  Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

  Examples:

  negative(5);     // -5
  negative(-3);    // -3
  negative(0);     // -0

*/

function negative(n) {
  if (n >= 0) {
    return n * (-1);
  } else {
    return n;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
