/*

Define a discriminated union Shape that can be either a Circle with kind: "circle" and radius properties, or a Square with kind: "square" and sideLength properties. Then write a function getArea that calculates the area of the given shape.

Expected output for getArea({ kind: "circle", radius: 10 }):

314.1592653589793

Expected output for getArea({ kind: "square", sideLength: 10 }):

100

*/

type Circle = {
  kind: 'circle';
  radius: number;
}

type Square = {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === 'circle') {
    return shape.radius * shape.radius * Math.PI;
  } else if (shape.kind === 'square') {
    return shape.sideLength * shape.sideLength;
  } else {
    console.log('Shape kind unidentified.');
    return 0;
  }
}

console.log(getArea({ kind: "circle", radius: 10 }));

console.log(getArea({ kind: "square", sideLength: 10 }));
