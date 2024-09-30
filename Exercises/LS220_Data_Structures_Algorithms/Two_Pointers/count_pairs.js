/*

  In this problem, you are provided with an ascending order array of integers, nums. Your task is to count the number of pairs in this array whose sum is greater than a given target value, target.

  Constraints:

  * The array nums is sorted in ascending order.
  * No duplicate pairs should be counted. For instance, if nums contains [1, 2] and target is 2, then (1, 2) is a valid pair since 1 + 2 > 2. You shouldn't include (2, 1)
 
  Example test cases:

  console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
  // Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

  console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
  // Pair: (4, 5)

  console.log(countPairs([1, 3, 5, 7], 6) == 4);
  // Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

  console.log(countPairs([1, 2, 3, 4], 5) == 2);
  // Pairs: (2, 4), (3, 4)

  console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
  // No pairs

--- Algorithm ---

Initialize anchor to last element and runner to second to last element
Initialize count to zero
Repeat while runner is greater than zero
  Calculate the sum of elements at anchor and runner and
  If above target count up and decrease runner
  If below target decrease anchor and restart runner as anchor - 1
Return count

*/

let countPairs = function(arr, limit) {
  let anchor = arr.length - 1;
  let runner = anchor - 1;
  let count = 0;
  while (
    runner > 0 ||
    anchor > 1
  ) {
    let sum = arr[runner] + arr[anchor];
    if (sum > limit) {
      count++;
      runner--;
    } else {
      anchor--;
      runner = anchor - 1;
    }
  }
  return count;
}

console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)
                                                   
console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)
                                                   
console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)
                                                   
console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)
                                                   
console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs
