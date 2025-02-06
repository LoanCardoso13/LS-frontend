/*

Define a function isStringArray that takes an array of unknown elements and uses a type predicate to check if the array only contains strings.

Expected output for isStringArray([1, 2, 3]):

false

Expected output for isStringArray(["test", "string"]):

true

*/

function isString(ele: unknown): boolean {
  return typeof ele === 'string';
}

function isStringArray(arr: unknown[]): void {
  console.log(arr.every(ele => isString(ele)))
}

isStringArray([1, 2, 3]);
isStringArray(["test", "string"]);
