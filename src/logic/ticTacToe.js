// ticTacToe.js
class ticTacToe
{
  
  constructor(){
      this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.playerTurn = "X";
      this.winStatus = false;
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
    for(var i = 0; i < 9; i += 3){
      if(this.board[i] === this.board[i+1] && this.board[i] === this.board[i+2]){
        this.winStatus = true;
      }
    }
    for(var i = 0; i < 3; i++){
      if(this.board[i] === this.board[i+3] && this.board[i] === this.board[i+6]){
        this.winStatus = true;
      }
    }
  }

  resetBoard(){
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  
}


module.exports = ticTacToe;
