// ticTacToe.js
class ticTacToe
{
  
  constructor(){
      this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.playerTurn = "X";
  }

  makeMove(move){
    console.log("It is X's turn to move: ");
    this.board[move - 1] = this.playerTurn;
    return this.board;
  }
}


module.exports = ticTacToe;
