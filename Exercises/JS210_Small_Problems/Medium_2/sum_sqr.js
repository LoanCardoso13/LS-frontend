/*

  Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

  Examples:

  sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  sumSquareDifference(10);     // 2640
  sumSquareDifference(1);      // 0
  sumSquareDifference(100);    // 25164150

  Algorithm:

  Initialize sum1 and sum2 to zero
  Iterate through idexes from 1 up to input n (incusive) )i
    add sum1 to itself plus i
    add sum2 to itself plus i squared
  Reassign sum1 to the square of itself
  return sum1 - sum2

*/

let sumSquareDifference = (n) => {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= n; i++) {
    sum1 += i;
    sum2 += i**2;
  }
  sum1 = sum1**2;
  return sum1 - sum2;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
