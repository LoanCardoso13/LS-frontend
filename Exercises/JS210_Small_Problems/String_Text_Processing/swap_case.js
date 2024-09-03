/*

  Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

  Examples:

  swapCase('CamelCase');              // "cAMELcASE"
  swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

*/

let swapCase = str => {
  return str.split('').map(chr => {
    if (/[a-z]/.test(chr)) {
      return chr.toUpperCase();
    } else {
      return chr.toLowerCase();
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
