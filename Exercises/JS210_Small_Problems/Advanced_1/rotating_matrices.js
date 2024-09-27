/*

  As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

  1  5  8
  4  7  2
  3  9  6

  is represented by the following array of arrays:

  const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
  ];

  A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

  3  4  1
  9  7  5
  6  2  8

  A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

  3  4  1
  9  7  5

  its 90-degree rotation is:

  9  3
  7  4
  5  1

  Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

  Examples:

  const matrix1 = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
  ];

  const matrix2 = [
    [3, 7, 4, 2],
    [5, 1, 0, 8],
  ];

  const newMatrix1 = rotate90(matrix1);
  const newMatrix2 = rotate90(matrix2);
  const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

  console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
  console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
  console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

  ---

  Problem:

    Rotate an mxn matrix, given as nested arrays, 90 degrees clockwise. This means that if a matrix has m rows and n columns, its (0,0) element is moved to: (0,m-1) and so it goes as:
    (0,0) => (0,m-1), (0,1) => (1,m-1), (0,2) => (2,m-1) ... (0, n-1) => (n-1,m-1)
    (1,0) -> (0,m-2), (1,1) -> (1,m-2), (1,2) => (2,m-2) ... (1, n-1) -> (n-1,m-2)
    (2,0) => (0,m-3), (2,1) => (1,m-3), (2,2) -> (2,m-3) ... (2, n-1) => (n-1,m-3)
    ...
    (m-1,0) => (0,0), (m-1,1) => (1,0), (m-1,2) => (2,0) ... (m-1,n-1) => (n-1,0)

    The rows from up to bottom become the columns from right to left.
    Given an element (i,j), its place in the output matrix is (j,m-1-i)

  Algorithm:

    Calculate m as length of input array
    Calculate n as length of input array element at 0
    Initialize answer array to an array with n nested empty arrays
    Iterate through indexes from 0 to m (not inclusive) (i)
      Iterate through indexes from 0 to n (not inclusive) (j)
        Assign answer array at (j,m-1-i) to value at input array at (i,j)
    Return answer array

*/

function rotate90(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let answer = [];
  for (let idx = 0; idx < n; idx++) {
    answer.push([]);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      answer[j][m-1-i] = matrix[i][j];
    }
  }
  return answer;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
                                                                            
const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];
                                                                            
const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
                                                                            
console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
