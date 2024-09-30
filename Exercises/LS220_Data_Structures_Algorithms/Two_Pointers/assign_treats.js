/*

  Imagine you're a pet owner wanting to give treats to your pets. Each pet has a specific appetite level represented by an array appetite[i], which is the minimum size of a treat the pet will be happy with. Each treat has a size represented by an array treats[j]. A pet will be satisfied if the size of the treat treats[j] is greater than or equal to its appetite level appetite[i]. Your goal is to maximize the number of satisfied pets and output the number of satisfied pets in the end.

  Examples and test cases:

  console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
  console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
  console.log(assignTreats([1, 2, 3], [3]) === 1);
  console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
  console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
  console.log(assignTreats([1,2,3], [1,2,3]) === 3);
  console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

  // All test cases should log true.

*/

function assignTreats(appetite, treats) {
  appetite.sort((a1, a2) => a1 - a2);
  treats.sort((t1, t2) => t1 - t2);
  let anchor = 0;
  let runner = 0;
  let count = 0;

  while (
    anchor < appetite.length &&
    runner < treats.length
  ) {
    if (appetite[anchor] > treats[runner] ) {
      runner++;
    } else {
      count++;
      runner++;
      anchor++;
    }
  }

  return count;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);
