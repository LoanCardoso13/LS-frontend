/*

Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids. The function returns true for valid swaps and undefined for invalid. To put the focus on the node swapping functionality, you can assume that nodes will have a value for the id attribute and two arguments will always be provided. Use the following HTML and sample codes to test your output:

<!doctype html>
<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
    <div id="2"></div>
    <div id="3">
      <div id="7"></div>
      <div id="8"></div>
      <div id="9"></div>
    </div>
  </body>
</html>

// at least one of the id attributes doesn't exist
> nodeSwap(1, 20);
= undefined

// at least one of the nodes is a "child" of the other
> nodeSwap(1, 4);
= undefined
> nodeSwap(9, 3);
= undefined

// one swap
> nodeSwap(1, 2);

<!doctype html>
<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="2"></div>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
    <div id="3">
      <div id="7"></div>
      <div id="8"></div>
      <div id="9"></div>
    </div>
  </body>
</html>

// multiple swaps
> nodeSwap(3, 1);
> nodeSwap(7, 9);

<!doctype html>
<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="3">
      <div id="9"></div>
      <div id="8"></div>
      <div id="7"></div>
    </div>
    <div id="2"></div>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
  </body>
</html>

*/

function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if (!node1 || !node2) return undefined;

  if (
    isIdElementWithin(node1, id2) ||
    isIdElementWithin(node2, id1)
  ) return undefined;

  let clone1 = node1.cloneNode(true);
  let clone2 = node2.cloneNode(true);
  node1.insertAdjacentElement("beforebegin", clone2);
  node2.insertAdjacentElement("beforebegin", clone1);
  node1.remove();
  node2.remove();
}

function isIdElementWithin(node, id) {
  if (node.id == id) return true;

  for (let i = 0; i < node.children.length; i++) {
    if (isIdElementWithin(node.children[i], id)) return true;
  }

  return false;
}
