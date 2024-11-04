/*

Our earlier implementation of the Function.prototype.bind was simplistic. Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. It's called partial function application. Read this assignment and the MDN documentation to learn more about partial function application.

Alter the myBind function written in the previous exercise to support partial function application of additional arguments to the original function.

*/

function myBind(func, obj, ...args1) {
  return function (...args2) {
    return func.apply(obj, args1.concat(args2));
  }
}

let myFunction =  function (a, b) {
  console.log(this);
  console.log(a, b);
}

let obj = {
  a: 1,
  b: 2,
}

myBindedFunction = myBind(myFunction, obj, 1);
myBindedFunction(3);
