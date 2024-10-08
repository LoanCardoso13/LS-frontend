/*

  Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (°) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

  Note: You can use the following constant to represent the degree symbol:

  const DEGREE = '\u00B0';

  Examples:

  // All test cases should return true
  console.log(dms(30) === "30°00'00\"");
  console.log(dms(76.73) === "76°43'48\"");
  console.log(dms(254.6) === "254°35'59\"");
  console.log(dms(93.034773) === "93°02'05\"");
  console.log(dms(0) === "0°00'00\"");
  console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");

  Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

*/

"use strict";

const DEGREE = '\u00B0';

function dms(degreesInFloat) {
  let degreesInInteger = Math.floor(degreesInFloat);
  let { minutes, seconds } = decimalsToDegrees(degreesInFloat - degreesInInteger);

  if (Math.floor(minutes / 10) === 0) minutes = "0" + minutes;
  if (Math.floor(seconds / 10) === 0) seconds = "0" + seconds;

  return degreesInInteger + DEGREE + minutes + "'" + seconds + '"';
}

function decimalsToDegrees(number) {
  let minutes = Math.floor(number * 60);
  let seconds = Math.floor(( (number * 60) - minutes ) * 60);
  return { minutes, seconds, };
}

// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");
