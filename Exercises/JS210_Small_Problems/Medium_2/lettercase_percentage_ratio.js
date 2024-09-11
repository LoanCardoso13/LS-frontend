/*

  Write a function that takes a string and returns an object containing the following three properties:

  * the percentage of characters in the string that are lowercase letters
  * the percentage of characters that are uppercase letters
  * the percentage of characters that are neither

  You may assume that the string will always contain at least one character.

  Examples:

  letterPercentages('abCdef 123');
  // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

  letterPercentages('AbCd +Ef');
  // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

  letterPercentages('123');
  // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

  PEDAC

  Problem:

    input: string that may contain type of characters. Every character, including space, counts as a character.
    output: object with lower, upper and neither case keys having values corresponding to respective percentage of characters in the input string that fit the category. Percentage fixed to 2 decimals.

    rules: input always string and always at least a character length.

  Examples and test cases:

    provided

  Data Structure:

    iteration through indexes of string. use of length string important parameter for iterations.

  Algorithm:

    Initialize variables neither, lowcaseCount and uppercaseCount to 0
    Assign length of input string to len variable
    Iterate through indexes from 0 to len (not inclusive) (i)
      If input string at i is lowercase
        increase lowcaseCount
      Else, if is uppercase
        increase uppercaseCount
      Else
        increase neither
    return object with values being the key respective count divided by len fixed to 2 decimals converted to string

*/

let letterPercentages = str => {
  let lowcaseCount = 0;
  let uppercaseCount = 0;
  let neither = 0;
  let len = str.length;

  for (let i = 0; i < len; i++) {
    if (/[a-z]/.test(str[i])) {
      lowcaseCount += 1;
    } else if (/[A-Z]/.test(str[i])) {
      uppercaseCount += 1;
    } else {
      neither += 1;
    }
  }

  return {
    lowercase: String((100 * lowcaseCount / len).toFixed(2)),
    uppercase: String((100 * uppercaseCount / len).toFixed(2)),
    neither: String((100 * neither / len).toFixed(2)),
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
                                                                
console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
                                                                
console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
