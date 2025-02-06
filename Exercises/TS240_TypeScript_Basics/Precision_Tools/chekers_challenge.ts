/*

Implement a function assertNever that takes a value of type never and throws an error. Refactor the solution we had in the last exercise to add exhaustiveness checking to the getArea function above to ensure all cases are handled.

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

*/

function assertNever(ele: never): void {
  throw new Error("Houston, we got a problem.")
}

(function() {
  type Circle = {
    kind: "circle";
    radius: number;
  };

  type Square = {
    kind: "square";
    sideLength: number;
  };

  type Shape = Circle | Square;

  function getArea(shape: Shape): number {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
    } else if (shape.kind === "square") {
      return shape.sideLength ** 2;
    } else {
      assertNever(shape);
      return 0;
    }
  }


  console.log(getArea({ kind: "circle", radius: 10 }));

  console.log(getArea({ kind: "square", sideLength: 10 }));

})();

