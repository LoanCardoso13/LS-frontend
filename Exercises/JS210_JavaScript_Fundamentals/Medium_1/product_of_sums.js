/*

  The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers. Read through the following code. Will it produce the expected result? Why or why not?

  function productOfSums(array1, array2) {
    let result = total(array1) * total(array2);
    return result;
  }

  function total(numbers) {
    let sum;

    for (let i = 0; i < numbers.length; i += 1) {
      sum += numbers[i];
    }

    sum;
  }

  Solution:

  This is not going to work for 2 reasons, both located within the total function:
  1) Variable sum is declared but not assigned to 0, this means its value is undefined when it is used in the expression within the iterator. 
  2) Function total is not returning any value. Keyword return is not being used. It will return undefined.

*/

// Both of these problems are easy to fix. Here's the corrected version:
function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}
                                                
function total(numbers) {
  let sum = 0;
                                                
  for (let idx = 0; idx < numbers.length; idx += 1) {
    sum += numbers[idx];
  }
                                                
  return sum;
}

console.log(productOfSums([1, 2, 3], [2, 2])) // Should log 24
