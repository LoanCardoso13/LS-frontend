/*

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Algorithm:
- getCentury
Divide year by 100, round down and add 1
If remainder of division with 100 is zero, subtract 1
Stringify and return

- getAppending
If last character is 1 and second to last is not 1
  return 'st'
If last character is 2 and second to last is not 1
  return 'nd'
If last character is 3 and second to last is not 1
  return 'rd'
Else return 'th'

*/

function century(year) {
  let century = getCentury(year);
  let appending = getAppending(century);
  return century + appending;
}

function getCentury(year) {
  let century = Math.floor(year / 100) + 1;
  if (year % 100 === 0) century -= 1;
  return String(century);
}

function getAppending(century) {
  let lastChar = century.charAt(century.length - 1);
  let secondToLastChar = century.charAt(century.length - 2);
  if (lastChar === '1' && secondToLastChar !== '1') return 'st';
  if (lastChar === '2' && secondToLastChar !== '1') return 'nd';
  if (lastChar === '3' && secondToLastChar !== '1') return 'rd';
  return 'th';
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
