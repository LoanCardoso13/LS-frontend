/*

  Read through the code shown below. What does it log to the console at lines 6 and 10?

  let myArray = [1, 2, 3, 4];
  const myOtherArray = myArray;

  myArray.pop();
  console.log(myArray);
  console.log(myOtherArray);

  myArray = [1, 2];
  console.log(myArray);
  console.log(myOtherArray);

  Solution:

  [1, 2, 3]
  [1, 2, 3]
  [1, 2]
  [1, 2, 3]

  On the former 2 logs, both variables are pointing to the same array object. This object has just been mutated by the use of Array.prototype.pop() method. Since it was a mutation, the constant constraint on myOtherArray variable (i.e. the fact that it isn't a variable but a constant) didn't prevent it - what it would have prevented would be a reassignment of the variable. 

  On the latter 2 logs, the variables are now pointing at different objects. When myArray variable was reassigned, it began pointing at another object, not the same that myOtherArray points to any longer. 

*/

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);
