/*

  Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

  Examples:

  repeater('Hello');        // "HHeelllloo"
  repeater('Good job!');    // "GGoooodd  jjoobb!!"
  repeater('');             // ""

*/

function repeater(str) {
  if (!str) return '';

  let answer = '';
  let length = str.split('').length;
  for (let i = 0; i < length; i++) {
    answer += str[i] + str[i];
  }
  return answer;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
