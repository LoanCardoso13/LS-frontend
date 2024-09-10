/*

  In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

  Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

  Rewrite your recursive fibonacci function so that it computes its results without using recursion.

  Examples:

  fibonacci(20);       // 6765
  fibonacci(50);       // 12586269025
  fibonacci(75);       // 2111485077978050

  Note that JavaScript can accurately compute integers up to 16 digits long; this means that fibonacci(78) is the largest Fibonacci number that you can accurately compute with simple operations in JavaScript.

  Algorithm:

    Initialize previous1 and 2 to 1, current value to nothing and index to 2
    While index is less or equal to input n
      reassign current value to previous' sum
      increase index
      reassign previous2 to previous1
      reassign previous1 to current value
    Return current value

*/

let fibonacci = n => {
  let previous1 = 1;
  let previous2 = 1;
  let currentValue;
  let index = 2;
  while (index < n) {
    currentValue = previous1 + previous2;
    index += 1;
    previous2 = previous1;
    previous1 = currentValue;
  }
  return currentValue;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
