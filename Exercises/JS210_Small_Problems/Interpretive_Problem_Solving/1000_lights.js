/*

  You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

  Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

  Examples:

  function lightsOn(switches) {
    // ...
  }

  lightsOn(5);        // [1, 4]
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

  lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

Problem: 

  Given an integer n, take it as both the number of lights in a row, and the number of repetitions (rounds) of cycles of toggling some lights. The lights to toggle correspond to multiples of the current round of toggling. 

  input: integer
  output: array of integers corresponding to postion of lights that were left on after all the cycles have been completed.

  rules: light positions are 1-index based. 

Examples and test cases:

  lightsOn(0); // []
  lightsOn(1); // [1]
  lightsOn(2); // round 1: [1 2] -> round 2: [1]
  lightsOn(3); // round 1: [1 2 3] -> round 2: [1 3] -> round 3: [1]

Data structure:

  Array of booleans representing the lights. Nested iteration; i.e. through rounds and through lights. Iteration through array.

Algorithm:

  Initialize answer empty array
  Initialize array containing n boolean false values. (boolArr)
  Iterate from 1 to n (inclusive) (round)
    Initialize lightNumber to round
    While lightNumber <= n do
      Toggle boolArr at lightNumber - 1
      Reassign lightNumber to itself plus round
  Iterate through elements of boolArr with index
    If element is true, push index + 1 to answer array
  Return answer array

*/

let lightsOn = function(n) {
  if (n === 0) return [];

  let answer = [];
  let boolArr = [];
  for (let i = 1; i <= n; i++) {
    boolArr.push(false);
  }
  for (let round = 1; round <= n; round++) {
    for (let lightNumber = round; lightNumber <= n; lightNumber += round) {
      boolArr[lightNumber - 1] = !boolArr[lightNumber - 1];
    }
  }
  for (let i = 0; i < boolArr.length; i++) {
    if (boolArr[i]) answer.push(i + 1);
  }
  return answer;
}


console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // []
console.log(lightsOn(1)); // [1]
console.log(lightsOn(2)); // round 1: [1 2] -> round 2: [1]
console.log(lightsOn(3)); // round 1: [1 2 3] -> round 2: [1 3] -> round 3: [1]
