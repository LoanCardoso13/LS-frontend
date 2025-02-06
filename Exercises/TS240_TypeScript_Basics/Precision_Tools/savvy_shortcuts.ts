/*

Write a TypeScript function that accepts a parameter of type string | undefined. The function should use short-circuiting to:

1) Log "Input is defined and not empty" if the input is a non-empty string.
2) Do nothing if the input is either undefined or an empty string ("").

*/

function shortCircuit(ele: string | undefined): void {
  ele && console.log("Input is defined and not empty.");
}

shortCircuit(undefined);
shortCircuit('');
shortCircuit('foo');
