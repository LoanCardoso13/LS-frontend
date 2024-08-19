/*

  Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

  Examples:

  isRealPalindrome('madam');               // true
  isRealPalindrome('Madam');               // true (case does not matter)
  isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
  isRealPalindrome('356653');              // true
  isRealPalindrome('356a653');             // true
  isRealPalindrome('123ab321');            // false

*/

function isPalindrome(str) {
  let str2 = str.slice().toLowerCase();
  str2 = str2.split('').reverse().join('');

  return str.toLowerCase() === str2;
}

function isRealPalindrome(str) {
  filteredStr = filterNonAlphabetic(str);
  return isPalindrome(filteredStr);
}

function filterNonAlphabetic(str) {
  return str.split('').filter(character => (/[a-z]/gi).test(character)).join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
