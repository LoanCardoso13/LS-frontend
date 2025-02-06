/*

Create a function named wrapInArray that takes a parameter that could either be a string or a number, and returns an array containing just that value.

Expected output:

["hello"]
[100]

*/

function wrapInArray<T>(ele: T): T[] {
  return [ele];
}
