/*

  Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

  Example

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

  console.log(transactionsFor(101, transactions));
  // returns
  // [ { id: 101, movement: "in",  quantity:  5 },
  //   { id: 101, movement: "in",  quantity: 12 },
  //   { id: 101, movement: "out", quantity: 18 }, ]

  PEDAC

  Problem:

  Examples and test cases:

  Data Structure:

  Algorithm:
    
    Filter out from input array objects that don't have id matching input id and return filtered array

*/

let transactionsFor = (id, allTrans) => {
  return allTrans.filter(tran => tran.id === id);
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
                                                                      
console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]