/*

  Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

  You may (and should) use the substrings function you wrote in the previous exercise.

  For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

  Examples:

  palindromes('abcd');       // []
  palindromes('madam');      // [ "madam", "ada" ]

  palindromes('hello-madam-did-madam-goodbye');
  // returns
  [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
    "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
    "-madam-", "madam", "ada", "oo" ]

  palindromes('knitting cassettes');
  // returns
  [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

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

let palindromes = str => {
  let allSubStrs = substrings(str);
  return allSubStrs.filter(word => (word === word.split('').reverse().join('')) && word.length > 1);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
                                                                           
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]
                                                                           
console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
