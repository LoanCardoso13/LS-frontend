/*

  Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

  You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

  Example:

  substrings('abcde');

  // returns
  [ "a", "ab", "abc", "abcd", "abcde",
    "b", "bc", "bcd", "bcde",
    "c", "cd", "cde",
    "d", "de",
    "e" ]

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

    Initialize answer to empty array
    Iterate over i from 0 to input str length - 1
      push into answer return of leadingSubstrings called with slice input str from i until its end as argument 
    Return answer

*/

let substrings = str => {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    answer.push(leadingSubstrings(str.slice(i)));
  }
  return answer.flat();
}

let leadingSubstrings = str => {
  let answer = [];
  for (let i = 1; i <= str.length; i++) {
    answer.push(str.slice(0, i));
  }
  return answer;
}

console.log(substrings('abcde'));
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
