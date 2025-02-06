/*

Create a generic function filterByType that filters an array based on the type provided. Use generics to return an array containing only elements of the given type.

Expected output for filterByType<string>(["hello", "world", 42, true], "string"):

["hello", "world"]

*/

function isType<T>(val: unknown, type: string): val is T {
  return typeof val === type;
}

function filterByType<T>(arr: unknown[], type: string): T[] {
  return arr.filter(ele => isType<T>(ele, type));
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));
