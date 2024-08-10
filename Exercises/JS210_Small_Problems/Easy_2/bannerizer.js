/*

Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.

*/

function logInBox(str) {
  let boxSize = str.length + 4;
  let topBottom = '+' + '-'.repeat(boxSize - 2) + '+';
  let padding = '|' + ' '.repeat(boxSize - 2) + '|';
  let middle = `| ${str} |`;

  console.log(topBottom);
  console.log(padding);
  console.log(middle);
  console.log(padding);
  console.log(topBottom);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
