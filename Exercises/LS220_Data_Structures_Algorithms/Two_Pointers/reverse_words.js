/*

  You are given a sentence represented by a string str. Your objective is to reverse all the characters in each word of the sentence while ensuring that the case of each character remains unchanged. The spaces between words should be preserved as they are, and the overall order of the words in the sentence must not be altered.

  You should solve the problem without using the Array#reverse method.

  Example test cases:

  console.log(reverseWords("Hello World") === "olleH dlroW");
  console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
  console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
  console.log(reverseWords("Launch School") === "hcnuaL loohcS");

*/

let reverseWords = function(str) {
  let answer = [];
  str.split(' ').forEach(word => {
    answer.push(reverseIt(word));
  });
  return answer.join(' ');
}

let reverseIt = function(str) {
  let start = 0;
  let end = str.length - 1;
  strArr = str.split('');

  while (start < end) {
    [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
    start++;
    end--;
  }

  return strArr.join('');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
