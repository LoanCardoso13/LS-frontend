/*

  Implement a recursive function that reverses a given string. The function should take a string as input and return its reverse. For example, if the input is "hello", the function should return "olleh". Solve the problem using recursion.

  Example test cases:

  console.log(reverseString("hello") === "olleh");
  console.log(reverseString("world") === "dlrow");
  console.log(reverseString("a") === "a");
  console.log(reverseString("") === "");
  console.log(reverseString("recursion") === "noisrucer");

  // All test cases should log true.

*/

function reverseString(str) {
  let answer = '';

  function traverseStrFrom(idx) {
    if (idx === str.length) return;

    traverseStrFrom(idx + 1);
    answer += str[idx];
  }

  traverseStrFrom(0)

  return answer;
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");
