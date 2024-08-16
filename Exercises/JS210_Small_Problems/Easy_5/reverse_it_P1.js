/*

  Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

  Examples:

  reverseSentence('');                       // ""
  reverseSentence('Hello World');            // "World Hello"
  reverseSentence('Reverse these words');    // "words these Reverse"

*/

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
