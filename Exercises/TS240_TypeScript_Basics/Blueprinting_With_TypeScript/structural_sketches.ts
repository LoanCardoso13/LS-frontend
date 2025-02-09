/*

Create two variables, computer and smartphone, using a type alias Device that requires manufacturer (string), model (string), and year (number). Demonstrate TypeScript's structural compatibility by creating a variable with a shape that has compatible properties with Device.

Expected outcome:

* Demonstration of how TypeScript's structural typing system handles object shapes with compatible properties.

*/

type Device = {
  manufacturer: string;
  model: string;
  year: number;
}

const computer: Device = {
  manufacturer: 'Dell',
  model: '386x',
  year: 1991,
}

const smartphone: Device = {
  manufacturer: 'Samsung',
  model: 'X',
  year: 2008,
}
