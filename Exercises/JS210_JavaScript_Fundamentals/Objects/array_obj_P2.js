/*

  A user wrote a function that takes an array as an argument and returns its average. Given the code below, the user expects the average function to return 5. Is the user's expectation correct? Why or why not?

  const myArray = [5, 5];
  myArray[-1] = 5;
  myArray[-2] = 5;

  function average(array) {
    let sum = 0;

    for (let i = -2; i < array.length; i += 1) {
      sum += array[i];
    }

    return sum / array.length;
  }

  average(myArray);

  Solution:

  Although JS did coerse the negative integers into their string form in order to extract the corresponding values from the negative indexes that were inserted in the array after initialization, during the iterations, the user assumed that these pseudo-indexes (they aren't indexes) inserted values would count toward the length of the array, which is not the case. The user should have used Object.keys() method, instead of length property, to obtain this result.

*/

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
                                               
function average(array) {
  let sum = 0;
                                               
  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }
                                               
  return sum / array.length;
}
                                               
console.log(average(myArray));
