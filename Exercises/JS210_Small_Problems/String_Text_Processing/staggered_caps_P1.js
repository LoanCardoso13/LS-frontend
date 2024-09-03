/*

  Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

  Examples:

  staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
  staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
  staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

*/

let staggeredCase = str => {
  let counter = 0;
  return str.split('').map(chr => {
    counter += 1;
    if (counter % 2 === 1) {
      return chr.toUpperCase();
    } else {
      return chr.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
