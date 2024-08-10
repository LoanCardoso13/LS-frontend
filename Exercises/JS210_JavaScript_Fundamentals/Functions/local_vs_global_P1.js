/*
 *
 * What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  var myVar = 'This is global';

  function someFunction() {
    var myVar = 'This is local';
  }

  someFunction();
  console.log(myVar);

  Solution:

  It prints "This is global" because var declarations are function scoped. The someFunction() call creates and destroys a new myVar variable that is unrelated to the initial myVar declared on line 1.

*/

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

