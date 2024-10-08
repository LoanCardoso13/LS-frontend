/*

  The penultimate function takes a string as an argument and returns the next-to-last word in the string. The function assumes that "words" are any sequence of non-whitespace characters. The function also assumes that the input string will always contain at least two words. The penultimate function in the example below does not return the expected result. Run the code below, check the current result, identify the problem, explain what the problem is, and provide a working solution.

  Examples:

  function penultimate(string) {
    return string.split(' ')[-2];
  }

  penultimate('last word');                    // expected: "last"
  penultimate('Launch School is great!');      // expected: "is"

  Solution:

  The problem is that the funtion is trying to use negative index in an array. Unlike other languages, JS doesn't have those. An alternative would be to could back from the length, so instead of -2 we would have arr.length - 2 inside the brackets after the string has been split into an array assigned to arr.

*/

function penultimate(string) {
  // return string.split(' ')[-2];
  let arr = string.split(' ');
  return arr[arr.length - 2];
}
                                                                 
console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
