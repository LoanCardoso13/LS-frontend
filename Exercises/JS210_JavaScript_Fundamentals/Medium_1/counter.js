/*

  What will the following code snippets log?

  1) 
  var counter = 5;
  var rate = 3;
  console.log('The total value is ' + String(counter * rate));

  function counter(count) {
    // ...
  }

  Solution: counter is hoisted at the top followed by its reassignment to 5. Thence the reassignment kind of shadows the function, in a way. The result is that the snippet logs "The total value is 15".

  2) 
  function counter(count) {
    // ...
  }

  console.log('The total value is ' + String(counter * rate));

  var counter = 5;
  var rate = 3;

  Solution: When counter and rate variables are used within an expression as argument to String(), the former is a function and the latter is undefined. The result of multiplying a function by undefined is NaN.

  3) 
  var counter = 5;
  var rate = 3;

  function counter(count) {
    // ...
  }

  console.log('The total value is ' + String(counter * rate));

  Solution: This is kind of similar to what happens at snippet 1, the function is hoisted at the top, but then subsequently reassigned. The result is that the snippet logs "The total value is 15".

  4)
  let counter = 5;
  let rate = 3;

  function counter(count) {
    // ...
  }

  console.log('The total value is ' + String(counter * rate));

  Solution: The rules for let declarations (and const for that matter) are independent of hoisting. No matter their relative position, a variable declared with let can't share its name/identifier with a function. If that happens an error is thrown. 

*/

// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));
//
// function counter(count) {
//   // ...
// }
//
// console.log();

// function counter(count) {
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate));
//
// var counter = 5;
// var rate = 3;
//
// console.log();

// var counter = 5;
// var rate = 3;
//
// function counter(count) {
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate));
//
// console.log();
//
// let counter = 5;
// let rate = 3;
//
// function counter(count) {
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate));
