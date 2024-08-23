/*

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Algorithm:

Initialize lastChar variable to empty string
Initialize answer variable to empty string
Iterate through indexes of input string
  If string character at current iteration is equal to lastChar
    continue
  Else
    Add string character at current iteration to answer
    Reassign lastChar to string character at current iteration
Return answer

*/

function crunch(str) {
  let lastChar = '';
  let answer = '';

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === lastChar) {
      continue;
    } else {
      answer += str[idx];
      lastChar = str[idx];
    }
  }

  return answer;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
