/*

  Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

  Examples:

  leadingSubstrings('abc');      // ["a", "ab", "abc"]
  leadingSubstrings('a');        // ["a"]
  leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

    Initialize empty answer array
      Increment i parameter from 1 until length of input array
      Slice input string from 0 until i and push it to answer array
    Return answer array

*/

let leadingSubstrings = str => {
  let answer = [];
  for (let i = 1; i <= str.length; i++) {
    answer.push(str.slice(0, i));
  }
  return answer;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
