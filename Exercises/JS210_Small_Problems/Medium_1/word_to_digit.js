/*

  Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

  Example:

  wordToDigit('Please call me at five five five one two three four. Thanks.');
  // "Please call me at 5 5 5 1 2 3 4. Thanks."

*/

let wordToDigit = str => {
  return str.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/gi, word => {
    if (word === 'zero') {
      return '0';
    } else if (word === 'one') {
      return '1';
    } else if (word === 'two') {
      return '2';
    } else if (word === 'three') {
      return '3';
    } else if (word === 'four') {
      return '4';
    } else if (word === 'five') {
      return '5';
    } else if (word === 'six') {
      return '6';
    } else if (word === 'seven') {
      return '7';
    } else if (word === 'eight') {
      return '8';
    } else if (word === 'nine') {
      return '9';
    } else {
      return word;
    }
  });
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
