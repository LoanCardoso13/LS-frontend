/*

  The following program is expected to log each number between 0 and 9 (inclusive) that is a multiple of 3. Read through the code shown below. Will it produce the expected result? Why or why not?

  let i = 0;
  while (i < 10) {
    if (i % 3 === 0) {
      console.log(i);
    } else {
      i += 1;
    }
  }

  Solution:

  This is gonna be an infinite loop since the else condition is never activated and thence the iterator variable, i, which is the basis of the conditional to break the loop, is never increased. To fix we just need to get rid of the else condition.

*/

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }
    i += 1;
}
