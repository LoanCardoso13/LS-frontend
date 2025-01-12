/*

Build A GUI standard calculator with the following specifications:

Specifications
Calculator screen

The calculator should have a screen like a standard calculator. The screen should have two parts:

1. A lower part—the entry window—that shows the current entry: the number you are entering or the most recent result.
2. An upper part—the operation window—that shows the operation in progress, e.g., 1 + 5 / 2 +.

Calculator buttons

The calculator should have functioning buttons for the following:

* All digits: 0-9
* ., +, -, /, *, %, =, NEG, C, CE
* The NEG button negates the value in the entry window.
* The CE button clears the entry window and replaces it with 0.
* The C button clears both the entry and operation windows and leaves a value of 0 in the entry window.

Operations

* When the user clicks a digit button, append the digit to the number in the entry window. If the value in the entry window is 0, replace the 0 with the entered digit.
* When the user clicks an operator button, copy the current entry and the operator into the operation window. You can leave the current entry in the entry window or set it to 0, but, either way, the next digit entered should begin a new number.
* When the user clicks the = button, use the current operation and the current entry to calculate the final result. Clear the current operation window and display the result in the entry window.

*/

$currentNum = $('p.current_num');
$calculation = $('p.calculation');
$digit = $('#buttons a.digit');
$op = $('#buttons a.op');
$control = $('#buttons a.control');
$result = $('#buttons a.result_button');

let operator;
let operand;
let typing = false;
const calculate = {
  "+": (n1, n2) => n1 + n2,
  "-": (n1, n2) => n1 - n2,
  "x": (n1, n2) => n1 * n2,
  "/": (n1, n2) => n1 / n2,
};

function updateScreen() {
  let n1 = Number(operand);
  let n2 = Number($currentNum.text());
  $currentNum.text(calculate[operator](n1, n2));
}

$(function() {

  $digit.on('click', e => {
    if (!typing) {
      $currentNum.empty();
      typing = true;
    }

    const digit = e.target.textContent;

    $currentNum.text($currentNum.text() + digit);
  });

  $op.on('click', e => {
    typing = false;

    if (operator) {
      $calculation.append(`${$currentNum.text()} ${e.target.textContent} `);
      updateScreen();
      operand = $currentNum.text();
      operator = e.target.textContent;
    } else {
      operand = $currentNum.text();
      operator = e.target.textContent;
      $calculation.append(`${$currentNum.text()} ${operator} `);
    }
  });

  $result.on('click', e => {
    typing = false;

    $calculation.empty();
    updateScreen();
    operand = false;
    operator = false;
  });
});
