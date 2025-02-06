/*

Create a variable randomValue that is of type unknown. Perform a type assertion to treat it as a string, and then call the .toUpperCase() method on it.

Expected output:

HELLO WORLD

*/

let randomValue: unknown = "hello world";

console.log(
  (randomValue as string).toUpperCase()
)
