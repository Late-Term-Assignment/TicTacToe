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
  }

  validateInput(move){
    if(this.board[move - 1] === "X" || this.board[move - 1] === "O"){
      return false;
    }
    return true;
  }

  changePlayerTurn(){
    if(this.playerTurn === "X"){
      this.playerTurn = "O";
    } else{
      this.playerTurn = "X";
    }
  }

  checkWinStatus(){
      if(this.board[0] === this.board[1] && this.board[0] === this.board[2]){
        return true;
      }
      return false;
  }
}


module.exports = ticTacToe;
