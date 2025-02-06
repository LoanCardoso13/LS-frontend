/*

Write a function printId that takes a parameter which could be either a number or a string. Inside the function, use a type guard to print "Your ID is a number" if the type is a number, or "Your ID is a string" if the type is a string.

Expected output for printId(101):

Your ID is a number

Expected output for printId("202"):

Your ID is a string

*/

function printId(id: string | number): string {
  if (typeof id === 'string') {
    return 'Your ID is a string';
  } else if (typeof id === 'number') {
    return 'Your ID is a number';
  } else {
    return 'Something went wrong.';
  }
}
