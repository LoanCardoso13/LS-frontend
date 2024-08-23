/*

  Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

  Example:

  const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

  countOccurrences(vehicles);

  // console output
  // car => 4
  // truck => 3
  // SUV => 1
  // motorcycle => 2
  // suv => 1

*/
"use strict";

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let uniqueElems = getUnique(arr);

  uniqueElems.forEach(
    word => {
      let count = 0;
      for (let idx = 0; idx < arr.length; idx++) {
        if (word === arr[idx]) count += 1;
      }
      console.log(`${word} => ${count}`);
    }
  );
}

function getUnique(arr) {
  let answer = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (!answer.includes(arr[idx])) answer.push(arr[idx]);
  }
  return answer;
}

countOccurrences(vehicles);
// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
