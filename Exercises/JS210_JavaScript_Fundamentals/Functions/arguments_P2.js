/*
 *
 * What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  let a = 7;

  function myValue(a) {
    a += 10;
  }

  myValue(a);
  console.log(a);

  Solution:

  It prints '7'. In this code variable shadowing takes place. The expression executed in the function upon its invokation *would* be a reassignment of the globally scoped 'a' variable that was declared on line 1 and assigned to 7 then. However, 'a' is also the parameter of the function and therefore when such expression is executed, it reassigns the local 'a' scoped at the function level. Since the globally scoped 'a' is not affected, it still references 7 when console.log prints its value.
*/

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);
