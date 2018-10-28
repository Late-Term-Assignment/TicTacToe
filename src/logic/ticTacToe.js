// ticTacToe.js
class ticTacToe
{ 
  constructor(){
      this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.playerTurn = "X";
      this.winStatus = 0;   //0 = no win, 1 = win, 2 = draw
      this.nrOfmoves = 0;
      this.xWins = 0;
      this.oWins = 0;
      this.draws = 0;
  }
  //Adds the move to the board and adds one to the nrOfMoves counter
  makeMove(move){
    this.board[move - 1] = this.playerTurn;
    this.nrOfmoves++;
  }
  //Checks if the selected space on the board is not already taken
  validateInput(move){
    if(this.winStatus !== 0 || this.board[move - 1] === "X" || this.board[move - 1] === "O"){
      return false;
    }
    return true;
  }
  //Changes the player turn by swiching playerTurn values
  changePlayerTurn(){
    if(this.playerTurn === "X"){
      this.playerTurn = "O";
    } else{
      this.playerTurn = "X";
    }
  }
  //Checks all possible ways to win the game and returns a number fitting for a win or a draw
  checkWinStatus(){
    for(var i = 0; i < 9; i += 3){
      if(this.board[i] === this.board[i+1] && this.board[i] === this.board[i+2]){
        this.winStatus = 1;
        return;
      }
    }
    for(var i = 0; i < 3; i++){
      if(this.board[i] === this.board[i+3] && this.board[i] === this.board[i+6]){
        this.winStatus = 1;
        return;
      }
    }
    if(this.board[0] === this.board[4] && this.board[0] === this.board[8] || 
       this.board[2] === this.board[4] && this.board[2] === this.board[6]){
      this.winStatus = 1;
      return;
    }
    
    if(this.nrOfmoves === 9 && !this.winStatus){
      this.winStatus = 2;
    }
  }
  //Checks and updates the score according to who win or if it was draw
  updateScore(){
    if(this.winStatus === 1){
      if(this.playerTurn === "X"){
        this.xWins++;
      } else{
        this.oWins++;
      }
    }
    else{
      this.draws++;
    }
  }
  //Resets the gameboard and status of the game, for a restart
  resetBoard(){
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.playerTurn = "X";
    this.nrOfmoves = 0;
    this.winStatus = 0;
  }
  //Resets the game session, resetting player socres and gamestate
  newSession(){
    this.resetBoard();
    this.xWins = 0;
    this.oWins = 0;
    this.draws = 0;
  }
}


module.exports = ticTacToe;
