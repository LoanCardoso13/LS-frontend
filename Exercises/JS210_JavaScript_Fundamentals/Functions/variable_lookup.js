/*
 *
 * What will the following code log to the console and why? Don't run the code until after you have tried to answer.
 
  var myVar = 'This is global';

  function someFunction() {
    console.log(myVar);
  }

  someFunction();

  Solution:

  It prints 'This is global'. The var declaration on line 1 creates a globally scoped variable which is accessible from the inner scope of the function someFunction() upon its invokation. 
*/

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();


