/*

(This is a challenging exercise. You may opt to not work on it. We will not have problems of this level of difficulty in the exams.

The challenge is mainly because of the logic/mental model for it can be tough to visualize right away. Once you've got a mental model the code isn't long and complex.)

Implement a function that converts a nested array of nodeNames (see Nodes to Array exercise for examples) to nodes. Go over the sample code and the corresponding return values below as a guide for what you will implement.

// Nested array of nodes
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

arrayToNodes(nodes);

<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>

// Nested array of nodes
const nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

// OR
//
// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]

arrayToNodes(nodes);

<body>
  <div>
    <div></div>
    <div>
      <div></div>
    </div>
  </div>
  <div></div>
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</body>

*/
