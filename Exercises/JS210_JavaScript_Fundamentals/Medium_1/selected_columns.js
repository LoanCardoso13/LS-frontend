/*

  The getSelectedColumns function selects and extracts specific columns to a new array. Currently, the function is not producing the expected result. Go over the function and the sample runs shown below. What do you think the problem is?

  function getSelectedColumns(numbers, cols) {
    var result = [];

    for (var i = 0, length = numbers.length; i < length; i += 1) {
      for (var j = 0, length = cols.length; j < length; j += 1) {
        if (!result[j]) {
          result[j] = [];
        }

        result[j][i] = numbers[i][cols[j]];
      }
    }

    return result;
  }

  // given the following arrays of number arrays
  const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

  // `array1` in row/column format
  // [[1, 2, 3],
  //  [4, 5, 6],
  //  [7, 8, 9]]

  getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
  getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
  getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

  Solution:

  The problem is the use of the same global variable 'length' to define the limits of nested iterations through rows and columns. The way the length variable is being defined within the for loop syntax is already problemtic, but it becomes consequentially wrong when the same variable is used. The quickest way to solve it is to simply rename the variables into lengthRow and lengthColumn so that they won't conflict, but it would probably be best to get rid of them altogether and use the length property of numbers and cols arrays to define the limit of iterations for them.

*/

function getSelectedColumns(numbers, cols) {
  var result = [];
                                                                                           
  for (var i = 0, lengthRow = numbers.length; i < lengthRow; i += 1) {
    for (var j = 0, lengthColumn = cols.length; j < lengthColumn; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }
                                                                                           
      result[j][i] = numbers[i][cols[j]];
    }
  }
                                                                                           
  return result;
}
                                                                                           
// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
                                                                                           
// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]
                                                                                           
console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]
