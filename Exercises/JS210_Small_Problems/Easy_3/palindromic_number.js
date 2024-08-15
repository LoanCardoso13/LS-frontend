/*

  Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

  Examples:

  isPalindromicNumber(34543);        // true
  isPalindromicNumber(123210);       // false
  isPalindromicNumber(22);           // true
  isPalindromicNumber(5);            // true

*/

function isPalindromicNumber(n) {
  let str = String(n);
  return isPalindrome(str);
}

function isPalindrome(str) {
  let str2 = str.slice();
  str2 = str2.split('').reverse().join('');

  return str === str2;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
