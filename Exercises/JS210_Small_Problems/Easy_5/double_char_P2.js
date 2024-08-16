/*

  Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

  Examples:

  doubleConsonants('String');          // "SSttrrinngg"
  doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
  doubleConsonants('July 4th');        // "JJullyy 4tthh"
  doubleConsonants('');                // ""

*/

function doubleConsonants(str) {
  if (!str) return '';

  let answer = '';
  let length = str.split('').length;
  for (let i = 0; i < length; i++) {
    if (isValid(str[i])) {
      answer += str[i] + str[i];
    } else {
      answer += str[i];
    }
  }

  return answer;
}

function isValid(character) {
  if (!!character.match(/[aeiou]/i)) return false;
  return !!character.match(/[a-z]/i);
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
