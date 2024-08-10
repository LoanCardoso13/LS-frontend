/*
 *
 * What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  logValue();

  function logValue() {
    console.log('Hello, world!');
  }

  Solution:

  It prints 'Hello, world!'. When JS runs a code it first creates a sort of lexical tree of the code, then it executes it. So, because JS has this previous step before actually executing the code, when logValue() gets invoked on line 1, JS already knows it exists and runs it.

*/

logValue();

function logValue() {
  console.log('Hello, world!');
}

// Further Exploration
//
// Let's refactor the code a bit. What does it log now? What is the hoisted equivalent of this code?

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// It prints 'string'. When var declaration and function declaration are hoisted, the latter gets on top of the former. This means that the var declaration in this code gets redundant and the reassignment of the logValue, from the function object to the 'foo' string takes place.
