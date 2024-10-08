/*

  A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

  Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

  NOTE: The largest possible featured number is 9876543201.

  Examples:

  featured(12);           // 21
  featured(20);           // 21
  featured(21);           // 35
  featured(997);          // 1029
  featured(1029);         // 1043
  featured(999999);       // 1023547
  featured(999999987);    // 1023456987
  featured(9876543186);   // 9876543201
  featured(9876543200);   // 9876543201
  featured(9876543201);   // "There is no possible number that fulfills those requirements."

  Algorithm:

  Iterate from input number to 9876543201
  If remainder with 2 is one and areDigitsUnique returns true (i)
    Return i

  areDigitsUnique(n) (helper)
  Convert n to string and assign to stringN being initialized
  initialize arr as empty array
  iterate through indexes from 0 to stringN length (not inclusive) (i)
    If stringN at i is included in arr
      return false
    Else
      push stringN in i to arr
    Return true

*/

let featured = number => {
  for (let i = number + 1; i <= 9876543201; i++) {
    if (i % 2 === 1 && areDigitsUnique(i) && i % 7 === 0) return i
  }
  return "There is no possible number that fulfills those requirements."
}

let areDigitsUnique = (n) => {
  let stringN = String(n);
  let arr = [];
  for (let i = 0; i < stringN.length; i++) {
    if (arr.includes(stringN[i])) {
      return false;
    } else {
      arr.push(stringN[i]);
    }
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
