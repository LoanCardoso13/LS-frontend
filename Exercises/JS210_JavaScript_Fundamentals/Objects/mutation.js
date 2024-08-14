/*

  What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
  const array2 = [];

  for (let i = 0; i < array1.length; i += 1) {
    array2.push(array1[i]);
  }

  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i].startsWith('C')) {
      array1[i] = array1[i].toUpperCase();
    }
  }

  console.log(array2);

  Solution:

  It is going to output ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']. The mutation ocurred in array1 won't affect array2 due to it being/point to a different array object. Both variables are initialized to different objects and the fact that one of the variables was used to provide strings (primitive, immutable) to another doesn't change that.

*/

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
