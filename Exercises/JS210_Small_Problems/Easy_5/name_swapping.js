/*

  Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

  Examples:

  swapName('Joe Roberts');    // "Roberts, Joe"

*/

function swapName(names) {
  let namesArr = names.split(' ');
  return namesArr.reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
