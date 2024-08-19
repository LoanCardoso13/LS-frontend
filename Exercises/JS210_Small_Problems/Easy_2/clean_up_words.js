/*

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "

Algorithm:

Initialize answer to empty string
Iterate through indexes of input string
  If current character is non-alphabetic 
    If last character from answer is not space
      Add space to answer
  If current character is alphabetic
    Add it to answer
Return answer

Check char if alphabetic
  Get ASCII from char
  Return true if between 97 and 122 or 65 and 90 (all limits inclusive)

*/

// function cleanUp(str) {
//   let answer = '';
//   for (let i = 0; i < str.length; i++) {
//     if (isAlphabetic(str[i])) {
//       answer += str[i];
//     } else {
//       if (answer.charAt(answer.length - 1) !== ' ') {
//         answer += ' ';
//       }
//     }
//   }
//   return answer;
// }
//
// function isAlphabetic(char) {
//   let code = char.charCodeAt(0);
//   return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
// }

function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

const lastChar = (text) => text[text.length - 1];

const isLowerCaseLetter = (char) => char >= 'a' && char <= 'z';

const isUpperCaseLetter = (char) => char >= 'A' && char <= 'Z';

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
