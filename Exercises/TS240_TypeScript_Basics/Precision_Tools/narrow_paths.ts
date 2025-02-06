/*

Create a function printLength that takes a parameter which could either be a string or an array of strings. Using type narrowing, print the length of the string or the count of elements in the array to the console along with what type of the element was passed in.

Expected output for printLength("hello"):

String length: 5

Expected output for printLength(["hello", "world"]):

Array count: 2

*/

function printLength(ele: string | string[]): void {
  if (Array.isArray(ele)) {
    console.log(`Array count: ${ele.length}`);
  } else {
    console.log(`String length: ${ele.length}`);
  }
}

printLength("hello");
printLength(["hello", "world"]);
