let readlineSync = require('readline-sync');

class Board {
  constructor() {
    this.squares = [];
    for (let i = 0; i < 9; i++) {
      this.squares.push(new Square());
    }
  }

  display() {
    let board = `
        |   |   
      ${this.squares[0].mark} | ${this.squares[1].mark} | ${this.squares[2].mark}
        |   |   
     ---+---+---
        |   |   
      ${this.squares[3].mark} | ${this.squares[4].mark} | ${this.squares[5].mark}
        |   |   
     ---+---+---
        |   |   
      ${this.squares[6].mark} | ${this.squares[7].mark} | ${this.squares[8].mark}
        |   |   
    `
    console.log(board);
  }

  squaresAvailable() {
    const availablePositions = this.squares.map((square, idx) => {
      if (square.mark === ' ') {
        return idx + 1;
      } else {
        return false;
      }
    }).filter(ele => ele);

    return availablePositions;
  }

  markAt(pos, player) {
    this.squares[pos - 1].mark = player === 'human' ? 'X' : 'O';
  }

  isGameOver() {
    return !!this.winner() || this.#isDraw();
  }

  winner() {
    const WINNING_SEQUENCES = [
      [1, 4, 7], [2, 5, 8], [3, 6, 9],
      [1, 2, 3], [4, 5, 6], [7, 8, 9],
      [1, 5, 9], [3, 5, 7],
    ]
    let winner;
    for (let i = 0; i < WINNING_SEQUENCES.length; i++) {
      let count1 = 0;
      let count2 = 0;
      WINNING_SEQUENCES[i].forEach(pos => {
        if (this.squares[pos - 1].mark === 'X') count1++;
        if (this.squares[pos - 1].mark === 'O') count2++;
      });
      if (count1 === 3) {
        winner = 'human';
        break;
      } else if (count2 === 3) {
        winner = 'computer';
        break;
      }
    }
    return winner;
  }

  #isDraw() {
    return this.squares.filter(square => square.mark === ' ').length === 0;
  }
}

class Square {
  constructor() {
    this.mark = ' ';
  }
}

class Player {
  constructor(type) {
    this.type = type;
  }

  move(board) {
    let positionChosen;
    let availableSquares = board.squaresAvailable();
    if (this.type === 'human') {
      positionChosen = Number(readlineSync.question(`Please choose one of the following available squares: (${availableSquares.join(', ')}) `));
    } else if (this.type === 'computer') {
      positionChosen = availableSquares[Math.floor(Math.random() * availableSquares.length)];
      console.log(`Computer chose square at ${positionChosen}`);
    }
    board.markAt(positionChosen, this.type);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.player1 = new Player('human');
    this.player2 = new Player('computer');
  }

  play() {
    console.clear();
    this.welcomeMessage();
    while (true) {
      this.board.display();
      this.player1.move(this.board);
      console.clear();
      this.board.display();
      if (this.board.isGameOver()) break;

      this.player2.move(this.board);
      if (this.board.isGameOver()) break;
    }
    this.board.display();
    this.goodbyeMessage();
  }

  welcomeMessage() {
    console.log('Welcome to Tic-Tac-Toe!');
  }

  goodbyeMessage() {
    console.log(`And the winner is: ${this.board.winner() || "it's a draw!"}`);
    console.log('Goodbye!');
  }
}

let game = new TTTGame();
game.play();
