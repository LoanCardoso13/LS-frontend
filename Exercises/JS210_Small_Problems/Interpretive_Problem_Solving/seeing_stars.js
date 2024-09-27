/*

  Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

  Examples:

  star(7);
  // logs
  *  *  *
   * * *
    ***
  *******
    ***
   * * *
  *  *  *

  star(9);
  // logs
  *   *   *
   *  *  *
    * * *
     ***
  *********
     ***
    * * *
   *  *  *
  *   *   *

--- Problem ---

  Given an odd integer greater or equal to 7, n, draw a 'star' within an nxn grid.

  A star is defined by a vertical-horizontal cross and 2 diagonals. The 4 lines meet in the middle.

  Main diagonal is i = j <=> i - j = 0
  Vertical axis is j = n/2 (floored)
  Horizontal axis is i = n/2 (floored)
  Counter diagonal is i + j = n - 1

--- Examples ---

  Given for 7 and 9 n's.

--- Data structure ---

  matrix.

--- Algorithm ---

  Create an nxn matrix of nested arrays filled with spaces.
  Nested iteration through coordinates of the matrix (i, j)
    if (i - j is 0 OR j is n/2 (floored) OR i is n/2 (floored) OR i + j is n - 1)
      Reassign matrix at (i, j) to '*'
  Print matrix

*/

let star = (n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i].push(' ');
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        i - j === 0 ||
        i === Math.floor(n/2) ||
        j === Math.floor(n/2) ||
        i + j === n - 1
      ) {
        matrix[i][j] = '*';
      }
    }
  }
  for (let i= 0; i < n; i++) {
    console.log(matrix[i].join(''));
  }
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
          
star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
