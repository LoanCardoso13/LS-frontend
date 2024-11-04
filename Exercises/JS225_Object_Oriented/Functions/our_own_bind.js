/*

Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

*/

function myBind(func, obj) {
  return function (...args) {
    return func.apply(obj, args);
  }
}

let myFunction =  function (a, b) {
  console.log(this);
}

let obj = {
  a: 1,
  b: 2,
}

myBindedFunction = myBind(myFunction, obj);
myBindedFunction(1, 3);
