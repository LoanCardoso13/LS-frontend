/*

  In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.

  Here is the code from the previous exercise:

  let myArray = [1, 2, 3, 4];
  const myOtherArray = myArray;

  myArray.pop();
  console.log(myOtherArray);

  myArray = [1, 2];
  console.log(myOtherArray);

*/

let myArray = [1, 2, 3, 4];
const myOtherArray1 = myArray.slice();
const myOtherArray2 = Array(...myArray);

myArray.pop();
console.log(myOtherArray1);
console.log(myOtherArray2);

myArray = [1, 2];
console.log(myOtherArray1);
console.log(myOtherArray2);
