// webLogic.js
initialize();
//add all eventlisteners
function initialize(){
    for(var i = 1; i <= 9; i++){
        document.getElementById(i.toString()).addEventListener("click", makeMove);
    }
    document.getElementById("new-game").addEventListener("click", newGame);
    document.getElementById("reset").addEventListener("click", reset);

}
//starts a new game but doesnt reset score
function newGame(){
    fetchGet("/newGame");
    initialize();
}
//starts a new game and resets score
function reset(){
    fetchGet("/resetGame");
    newGame();
}
//makes a move for the player and removes the event listener from the field
function makeMove(){
    fetchGet("/makeMove/" + this.id);
    this.removeEventListener("click", makeMove);
}
//get the json from the API and call the function updateBoard and calls endGame if the game has ended
function fetchGet(toFetch){
    fetch(toFetch, {method: 'GET'})
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(
        function(data) {
            updateBoard(data);
            if(data.TicTacToe.GameStatus != 0){
                endGame(data);
            }
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error:', err);
    });
}
function updateBoard(board){
    document.getElementById("message").innerHTML = board.TicTacToe.Turn + "'s turn";
    //inserts the fields from the array in board
    for(var i = 1; i <= 9; i++){
        if(board.TicTacToe.GameBoard[i - 1] == "X" || board.TicTacToe.GameBoard[i - 1] == "O" ){
            document.getElementById(i.toString()).innerHTML = board.TicTacToe.GameBoard[i - 1];
        }
        else {
            document.getElementById(i.toString()).innerHTML = null;
        }
    }
    
}
function endGame(board){
    var message;
    for(var i = 1; i <= 9; i++){
        document.getElementById(i.toString()).removeEventListener("click", makeMove);
    }
    if(board.TicTacToe.GameStatus == 1){
        message = "X wins";
    }
    else if(board.TicTacToe.GameStatus == 2){
        message = "O wins";
    }
    else{
        message = "Draw";
    }
    document.getElementById("message").innerHTML = message;
    document.getElementById("score1").innerHTML = board.TicTacToe.XWins;
    document.getElementById("score2").innerHTML = board.TicTacToe.OWins;
    document.getElementById("draws").innerHTML = board.TicTacToe.Draws;

}