/*
 *
 * What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  console.log(a);

  var a = 1;

  Solution:

  It prints 'undefined'. The var declaration is 'hoisted' to the top of the scope, but not its assignment. Therefore the program is equivalent to:

  var a;

  console.log(a);

  a = 1;

  Which has a as 'undefined' upon it being passed to console.log as argument due to having been initialized but not assigned to 1 yet.
*/

console.log(a);

var a = 1;
