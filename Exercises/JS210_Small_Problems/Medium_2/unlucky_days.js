/*

  Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

  Examples:

  fridayThe13ths(1986);      // 1
  fridayThe13ths(2015);      // 3
  fridayThe13ths(2017);      // 2

  Algorithm:

  initialize count to zero
  Iterate through months of january to december
    Create a date object with year input and iteration month and day 13
    Check if it is a friday, if yes, increase count
  return count

*/

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

let fridayThe13ths = (year) => {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    if (dayNames[date.getDay()] === "Friday") count += 1;
  }
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
