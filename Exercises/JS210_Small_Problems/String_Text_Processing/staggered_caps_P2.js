/*

  Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

  Examples:

  staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
  staggeredCase('ALL CAPS');                     // "AlL cApS"
  staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"

*/

let staggeredCase = str => {
  let counter = 0;
  return str.split('').map(chr => {
    if (/[a-z]/i.test(chr)) {
      counter += 1;
      if (counter % 2 === 1) {
        return chr.toUpperCase();
      } else {
        return chr.toLowerCase();
      }
    } else {
      return chr;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
