/*

  In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

  Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

  Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

  Examples:

  transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
  transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
  transpose([[1]]);                     // [[1]]

  transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
  // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

  Problem: modify code from transpose 3x3 problem to be dimension agnostic, i.e. to accept any matrix of mxn dimensions and transpose it.

  Algorithm:

  The only part of the code that was not dimension agonistic is the initialization of the answer array. It was being intialized with the same rows as the input array. It needs to have the same rows as there are columns in the input array. Simply add a [0] after the matrix and before the .map in the first line of the function where you initialize answer array.

  Turns out the code was not dimension agnostic because of the order of the assigning of the new nested array elements. The iteration order (outer iteration: row and inner iteration: column) implied a structure corresponding the the matrix where the elements are coming from, i.e. the input nested array, because that's where the bounderies of the iteration where being taken from. 

*/

let transpose = function(matrix) {
  let answer = matrix[0].map(ele => []);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      answer[j][i] = matrix[i][j];
    }
  }
  return answer;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
