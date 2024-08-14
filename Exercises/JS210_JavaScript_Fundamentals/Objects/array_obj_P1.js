/*

  What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  const myArray = ['a', 'b', 'c'];

  console.log(myArray[0]);
  console.log(myArray[-1]);

  myArray[-1] = 'd';
  myArray['e'] = 5;
  myArray[3] = 'f';

  console.log(myArray[-1]);
  console.log(myArray['e']);
  console.log(myArray);

  Solution:

  It logs: a, undefined, d, 5, ['a', 'b', 'c', 'f', '-1' : 'd', 'e' : 5]. When using a non-existing index, such as '-1' JS returns undefined. When adding arbitrary key-value pairs to an array, JS will add them to the array but treat them differently from the actual indexes of the array (which can be interpreted as key-value pairs where the keys are the indexes stringfied) except when the key added corresponds to the next index of the array (the case when myArray[3] = 'f').

*/

const myArray = ['a', 'b', 'c'];
                                 
console.log(myArray[0]);
console.log(myArray[-1]);
                                 
myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';
                                 
console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);
