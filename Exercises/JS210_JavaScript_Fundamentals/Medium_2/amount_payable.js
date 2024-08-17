/*

  What does the following code log? Why is this so?

  let startingBalance = 1;
  const chicken = 5;
  const chickenQuantity = 7;

  function totalPayable(item, quantity) {
    return startingBalance + (item * quantity);
  }

  startingBalance = 5;
  console.log(totalPayable(chicken, chickenQuantity));

  startingBalance = 10;
  console.log(totalPayable(chicken, chickenQuantity));

  Solution:

  It logs 40 and 45. The variable startingBalance is reassigned before each function call and therefore its new value is used by the functions each time. In other words, for variables that come from outer scope, their values are the current ones at the time of function invocation, not declaration.
    
  }

*/

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;
                                                     
function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}
                                                     
startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));
                                                     
startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
