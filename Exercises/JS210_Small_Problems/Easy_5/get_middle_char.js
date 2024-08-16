/*

  Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

  Examples:

  centerOf('I Love JavaScript'); // "a"
  centerOf('Launch School');     // " "
  centerOf('Launch');            // "un"
  centerOf('Launchschool');      // "hs"
  centerOf('x');                 // "x"

*/

function centerOf(str) {
  let midPoint = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    return str.slice(midPoint - 1, midPoint + 1);
  } else {
    return str.slice(midPoint, midPoint + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
