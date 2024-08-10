/*
 *
 * What will the following code log to the console and why? Don't run the code until after you have tried to answer.
 
  function someFunction() {
    myVar = 'This is global';
  }

  someFunction();
  console.log(myVar);

  Solution:

  When a reassignment expression is run, such as the one inside someFunction() upon its invokation, JS lookup for the variable declaration first in the inner/local scope, then the outer(s) scope(s) until it reaches the global scope. If none is find it creates a globally scoped one (binds to a property of the global object). This happens in this code, so myVar is reachable from the outer scope and references the value that it was assigned to from inside the function.
*/

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);
