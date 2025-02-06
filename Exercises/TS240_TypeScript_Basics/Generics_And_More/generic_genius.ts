/*

Implement a generic function firstElement that takes an array of any type and returns the first element or undefined if the array is empty.

Expected output for firstElement([7, 9, 11]):

7

Expected output for firstElement([]):

undefined

*/

function firstElement(arr: any[]): number | void {
  return arr[0] ? arr[0] : undefined;
}
