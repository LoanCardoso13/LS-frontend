/*

  What will the following program log to the console? Can you explain why?

  const array = ['Apples', 'Peaches', 'Grapes'];

  array[3.4] = 'Oranges';
  console.log(array.length);
  console.log(Object.keys(array).length);

  array[-2] = 'Watermelon';
  console.log(array.length);
  console.log(Object.keys(array).length);

  Solution:

  It logs:
  3
  4
  3
  5

  In JS arrays are just objects with special characteristics. As such, they can have new key-value pairs added to them with the usual syntax: obj[key] = value. The array indexes are keys from integers 0 until array length - 1, of string type. But the length property of array objects does Not account for keys outside the integers from 0 to length - 1 range, so in this example the 2 values entered, 'Oranges' and 'Watermelon', are set to keys not accounted for by length. The Object.keys() method, in the other hand, does take into account all keys, regardless of the restriction mentioned previously, its return value is an array and the length of this array acconts for the new keys, 3.4 and -2 shown above.    

*/

const array = ['Apples', 'Peaches', 'Grapes'];
                                               
array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);
                                               
array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);
