// webLogic.js
initialize();
function initialize(){
    for(var i = 1; i <= 9; i++){
        document.getElementById("s" + i.toString()).addEventListener("click", makeMove);
    }
    document.getElementById("new-game").addEventListener("click", newGame);
    document.getElementById("reset").addEventListener("click", reset);

}
function newGame(){
    fetchGet("/newGame");
    initialize();
}
function reset(){
    fetchGet("/resetGame");
    newGame();
}
function makeMove(){
    fetchGet("/makeMove/" + this.id);
    this.removeEventListener("click", makeMove);
}
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
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}
function updateBoard(board){
    document.getElementById("score1").innerHTML = board.TicTacToe.XWins;
    document.getElementById("score2").innerHTML = board.TicTacToe.OWins;
    document.getElementById("draws").innerHTML = board.TicTacToe.Draws;

    document.getElementById("message").innerHTML = board.TicTacToe.Turn + "'s turn";
    for(var i = 1; i <= 9; i++){
        if(board.TicTacToe.GameBoard[i - 1] == "X" || board.TicTacToe.GameBoard[i - 1] == "O" ){
            document.getElementById("s" + i.toString()).innerHTML = board.TicTacToe.GameBoard[i - 1];
        }
        else {
            document.getElementById("s" + i.toString()).innerHTML = null;
        }
    }
    if(board.TicTacToe.GameStatus != 0){
        for(var i = 1; i <= 9; i++)
        {
            document.getElementById("s" + i.toString()).removeEventListener("click", makeMove);
        }
        document.getElementById("message").innerHTML = "Game Over";

    }
}