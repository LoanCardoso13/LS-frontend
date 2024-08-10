/*
 *
 * What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  var myVar = 'This is global';

  function someFunction() {
    var myVar = 'This is local';
    console.log(myVar);
  }

  someFunction();

  Solution:

  It is going to print "This is local". var declared variables are function scoped, so the two myVar variables in the code are independent of each other. When resolving myVar given as argument to console.log, JavaScript first looks into the local scope and finds it.  
*/

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

