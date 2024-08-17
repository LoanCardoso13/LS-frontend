/*

  We make a few purchases to prepare for our study session, but the amount charged upon checkout seems too high. Run the following code and find out why we are charged incorrectly.

  // The shopping cart is a list of items, where each item
  // is an object { name: <string>, amount: <number> }.
  let shoppingCart = [];

  // Currently available products with prices.
  const prices = {
    'notebook': 9.99,
    'pencil': 1.70,
    'coffee': 3.00,
    'smoothie': 2.10,
  };

  function price({name}) {
    return prices[name];
  }

  // Adding an item to the shopping cart.
  // The amount is optional and defaults to 1.
  // If the item is already in the cart, its amount is updated.
  function updateCart(name, amount) {
    amount = amount || 1;

    let alreadyInCart = false;

    for (let i = 0; i < shoppingCart.length; i += 1) {
      let item = shoppingCart[i];

      if (item.name === name) {
        item.amount = amount;
        alreadyInCart = true;
        break;
      }
    }

    if (!alreadyInCart) {
      shoppingCart.push({ name, amount });
    }
  }

  // Calculating the price for the whole shopping cart.
  function total() {
    let total = 0;

    for (let i = 0; i < shoppingCart.length; i += 1) {
      let item = shoppingCart[i];

      total += (item.amount * price(item));
    }

    return total.toFixed(2);
  }

  function pay() {
    // omitted

    console.log(`You have been charged $${total()}.`);
  }

  function checkout() {
    pay();
    shoppingCart = [];
  }

  // Example purchase.

  updateCart('notebook');
  updateCart('pencil', 2);
  updateCart('coffee', 1);

  // Oh wait, I don't need pencils
  updateCart('pencil', 0);

  checkout();
  // You have been charged $14.69.

  Solution:

  When trying to update the cart to delete the 2 pencils added before, what the code is actually going to do is add another pencil. That is because the way the code defaults to 1 if no amount is given as arguments rely on the falsiness of the amount. Since 0 is falsy in JS, it will act as if it was undefined (another falsy value in JS) and change the amount from 0 to 1. We can solve by changing the way the amount defaults to 1, making it more strict, to activate only when the amount is undefined.

*/

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];
                                                              
// Currently available products with prices.
const prices = {
  'notebook': 9.99,
  'pencil': 1.70,
  'coffee': 3.00,
  'smoothie': 2.10,
};
                                                              
function price({name}) {
  return prices[name];
}
                                                              
// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount) {
  if (amount === undefined) amount = 1;
                                                              
  let alreadyInCart = false;
                                                              
  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];
                                                              
    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }
                                                              
  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}
                                                              
// Calculating the price for the whole shopping cart.
function total() {
  let total = 0;
                                                              
  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];
                                                              
    total += (item.amount * price(item));
  }
                                                              
  return total.toFixed(2);
}
                                                              
function pay() {
  // omitted
                                                              
  console.log(`You have been charged $${total()}.`);
}
                                                              
function checkout() {
  pay();
  shoppingCart = [];
}
                                                              
// Example purchase.
                                                              
updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);
                                                              
// Oh wait, I don't need pencils
updateCart('pencil', 0);
                                                              
checkout();
// You have been charged $14.69.
