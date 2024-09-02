/*

  Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

  You may (and should) use the transactionsFor function from the previous exercise.

  Examples:

  const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                         { id: 105, movement: 'in',  quantity: 10 },
                         { id: 102, movement: 'out', quantity: 17 },
                         { id: 101, movement: 'in',  quantity: 12 },
                         { id: 103, movement: 'out', quantity: 15 },
                         { id: 102, movement: 'out', quantity: 15 },
                         { id: 105, movement: 'in',  quantity: 25 },
                         { id: 101, movement: 'out', quantity: 18 },
                         { id: 102, movement: 'in',  quantity: 22 },
                         { id: 103, movement: 'out', quantity: 15 }, ];

  isItemAvailable(101, transactions);     // false
  isItemAvailable(105, transactions);     // true

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:
    
    Initialize quant variable to 0
    Get transactions for id
    Iterate through transaction objects and:
      If movement is in, sum quantity to quant
      If movement is out, subtract quantity from quant
    Return quant compared to zero

*/

let transactionsFor = (id, allTrans) => {
  return allTrans.filter(tran => tran.id === id);
}

let isItemAvailable = (id, allTrans) => {
  let quant = 0;
  let selectedTrans = transactionsFor(id, allTrans);
  selectedTrans.forEach(tran => {
    if (tran.movement === 'in') {
      quant += tran.quantity;
    } else {
      quant -= tran.quantity;
    }
  });
  return quant > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];
                                                                      
console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
