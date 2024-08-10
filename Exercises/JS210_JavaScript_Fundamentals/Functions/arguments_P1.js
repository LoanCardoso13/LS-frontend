/*
 *
 * What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  let a = 7;

  function myValue(b) {
    b += 10;
  }

  myValue(a);
  console.log(a);

  Solution:

  It prints '7'. Numbers are primitive values in JS. As such they are immutable. Immutable values always behave in a pass-by-value manner and therefore, when 7 is given as argument to this function through variable 'a', there is absolutely no way in which what happens inside the function, when its ran, upon its invocation, interferes with the original value referenced by 'a' (i.e. 7). The only way that could happen would be in a pass-by-reference behavior which would depend on the value being mutated, which can't happen with primitive values such as this.
*/

let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

