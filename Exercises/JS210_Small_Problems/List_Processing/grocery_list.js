/*

  Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

  In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

  Example:

  buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
  // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:

    Initialize empty answer array
    Iterate over each element of input array, call elements subAarr
      Repeat the following subAarr[1] times:
        push subAarr[0] into answer
    Return answer

*/

let buyFruit = arr => {
  let answer = [];
  arr.forEach(subArr => {
    for (let i = 0; i < subArr[1]; i++) {
      answer.push(subArr[0]);
    }
  });
  return answer;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
