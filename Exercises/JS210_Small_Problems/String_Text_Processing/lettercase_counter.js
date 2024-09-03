/*

  Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

  Examples:

  letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
  letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
  letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
  letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

*/

let letterCaseCount = str => {
  let upperMatch = str.match(/[A-Z]/g) || [];
  let lowerMatch = str.match(/[a-z]/g) || [];
  let neitherMatch = str.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerMatch.length,
    uppercase: upperMatch.length,
    neither: neitherMatch.length,
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
