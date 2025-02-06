/*

Define a generic interface KeyValuePair with two types, Key and Value, and two properties: key of type Key and value of type Value. Then create an instance of KeyValuePair where key is a string and value is a number.

Expected outcome:

It should be a type-safe structure that can be inspected.

*/

// type Key = string;
// type Value = number;
//
// interface KeyValuePair {
//   key: Key;
//   value: Value;
// }
//
// const myObj: KeyValuePair = {
//   key: 'aKey',
//   value: 13,
// }

interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const myObj: KeyValuePair<string, number> = {
  key: 'aKey',
  value: 13,
}
