/*

  The calculateBonus function calculates the bonus for a given salary. It makes use of two arguments for determining the bonus: a salary amount and a boolean switch. If the boolean is true, the bonus should be half of the salary; otherwise the bonus should be 0. Fill in the blanks in the function so that it will work, then explain why it works.

  Examples:

  function calculateBonus() {
    return _________[1] ? _________[0] / 2 : 0;
  }

  calculateBonus(2800, true);               // 1400
  calculateBonus(1000, false);              // 0
  calculateBonus(50000, true);              // 25000

  Solution:

  The function uses a ternary operator, which is a sort of a shorter if conditional. The Condition for this operator should be the second argument, and since it is using bracket notation to extract it, we need to have it in an array, which is obtained through the use of the spread operator in the parameters list. 

*/

function calculateBonus(...args) {
  return args[1] ? args[0] / 2 : 0;
}
                                                   
console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000
