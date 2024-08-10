/*
 *
 * What will the following code log to the console and why? Don't run the code until after you have tried to answer.
 
  var myVar = 'This is global';

  function someFunction() {
    myVar = 'This is local';
  }

  someFunction();
  console.log(myVar);

  Solution:

  It prints 'This is local'. Since the operation happening inside someFunction() is a reassignment and not a variable declaration, JS lookup for the myVar variable and it finds it in the global scope. Then it reassigns it and the new value is what gets printed.
*/

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

