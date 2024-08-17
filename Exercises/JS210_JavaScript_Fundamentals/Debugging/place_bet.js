/*

  The function placeABet below accepts a guess from the user between 1 and 25. The function should determine a winning number and return a message to the user indicating whether he/she entered a winning guess. When you try to invoke placeABet, an error is raised. Fix the bug and explain what caused it.

  function placeABet(guess) {
    (function generateRandomInt() {
      return Math.floor(Math.random() * 25) + 1;
    });

    const winningNumber = generateRandomInt();

    if (guess < 1 || guess > 25) {
      return 'Invalid guess. Valid guesses are between 1 and 25.';
    }

    if (guess === winningNumber) {
      return "Congratulations, you win!";
    } else {
      return "Wrong-o! You lose.";
    }
  }

  const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
  alert(placeABet(userGuess));

  Solution:

  When putting the function generateRandomInt inside parenthesis, it becomes an anonymous function, and since it is not being assigned to a variable, it is unreachable. So the attempt to call it will raise an error because it is actually not defined - was never declared - was made as an expression but never assigned to a variable. 

*/

let readlineSync = require('readline-sync');

function placeABet(guess) {
  (function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  });
                                                                      
  const winningNumber = generateRandomInt();
                                                                      
  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }
                                                                      
  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}
                                                                      
const userGuess = parseInt(readlineSync.question('How old are you? '), 10);
console.log(placeABet(userGuess));
