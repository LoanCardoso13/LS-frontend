/*

In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates as true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

*/

function objectsEqual(obj1, obj2) {
  return String(Object.entries(obj1).sort()) === String(Object.entries(obj2).sort());
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
