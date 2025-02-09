/*

A grocery store uses a JavaScript function to calculate discounts on various items. They are testing out various percentage discounts but are getting unexpected results. Go over the code, and identify the reason why they aren't getting the expected discounted prices from the function. Then, modify the code so that it produces the correct results.

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    this.price -= discount;

    return this.price;
  },
};

> item.discount(20)   // should return 40
= 40
> item.discount(50)   // should return 25
= 20
> item.discount(25)   // should return 37.5
= 15

*/

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    const price = this.price - discount;

    return price;
  },
};
// If we use the instance object's actual property to display the discounted price we mutate it, thereby changing it everytime we invoke the discount method. The solution is to display the new, discounted, price without affecting any of the instance object properties by creating a new, dedicated, local variable for this.

console.log(item.discount(20))   // should return 40
console.log(item.discount(50))   // should return 25
console.log(item.discount(25))   // should return 37.5
