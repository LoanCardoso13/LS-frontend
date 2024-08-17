/*

  What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  let a = [1, 2, 3];

  function myValue(b) {
    b[2] += 7;
  }

  myValue(a);
  console.log(a);

  Solution:

  The code will log [1, 2, 10] to the console. When myValue is called, the reference of the array assigned to 'a' on line 1 is passed to the function as 'b'. The code within the function runs with this reference pointing to the same array object. Since `b[2] += 7` is a mutating operation with respect to the array, it mutates the array object and so any and all references pointing to this object now reference a mutated object. On the last line, then, the local variable 'a' is used to log the mutated array to the console.

*/

let a = [1, 2, 3];
                      
function myValue(b) {
  b[2] += 7;
}
                      
myValue(a);
console.log(a);
