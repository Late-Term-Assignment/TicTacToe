// ticTacToe.js
class ticTacToe {
  // winStatus indicator:
  //      0 - Game in progress/not started
  //      1 - X has won
  //      2 - O has won
  //      3 - draw

  constructor() {
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.playerTurn = "X";
    this.winStatus = 0;
    this.nrOfmoves = 0;
    this.xWins = 0;
    this.oWins = 0;
    this.draws = 0;

  }
  //First it checks if the input is valid
  //Then it makes the move on the board
  //And calls other functions to update the game status
  makeMove(move) {
    if (this.validateInput(move)) {
      this.board[move - 1] = this.playerTurn;
      this.nrOfmoves++;
      this.checkWinStatus();
      this.updateScore();
      this.changePlayerTurn();
    }
  }
  ///This validates if the use is not clicking a square thats alreadu taken
  validateInput(move) {
    if (this.board[move - 1] === "X" || this.board[move - 1] === "O" || move < 1 || move > 9) {
      return false;
    }
    return true;
  }

  changePlayerTurn() {
    if (this.playerTurn === "X") {
      this.playerTurn = "O";
    } else {
      this.playerTurn = "X";
    }
  }
  //Checks all possible win statuses on the board, or if it's a draw
  checkWinStatus() {
    for (var i = 0; i < 9; i += 3) {
      if (this.board[i] === this.board[i + 1] && this.board[i] === this.board[i + 2]) {
        if (this.playerTurn === "X") {
          this.winStatus = 1;
        } else {
          this.winStatus = 2;
        }
        return;
      }
    }
    for (var i = 0; i < 3; i++) {
      if (this.board[i] === this.board[i + 3] && this.board[i] === this.board[i + 6]) {
        if (this.playerTurn === "X") {
          this.winStatus = 1;
        } else {
          this.winStatus = 2;
        }
        return;
      }
    }
    if (this.board[0] === this.board[4] && this.board[0] === this.board[8] ||
      this.board[2] === this.board[4] && this.board[2] === this.board[6]) {
      if (this.playerTurn === "X") {
        this.winStatus = 1;
      } else {
        this.winStatus = 2;
      }
      return;
    }

    if (this.nrOfmoves === 9 && !this.winStatus) {
      this.winStatus = 3;
    }
  }
  //This keeps the score up-to date on the scoreboard
  updateScore() {
    if (this.winStatus === 1) {
      this.xWins++;
    } else if (this.winStatus === 2) {
      this.oWins++;
    } else if (this.winStatus === 3) {
      this.draws++;
    }
  }
  //Completely resets the board and game status, restarting the session
  resetBoard() {
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.playerTurn = "X";
    this.nrOfmoves = 0;
    this.winStatus = 0;
  }
  //Clears the board, and resets all scores. 
  newSession() {
    this.resetBoard();
    this.xWins = 0;
    this.oWins = 0;
    this.draws = 0;
  }
}


module.exports = ticTacToe;