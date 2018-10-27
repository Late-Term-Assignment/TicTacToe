// webLogic.js
newGame();
function initialize(){
    for(var i = 0; i < 9; i++){
        document.getElementById(i.toString()).addEventListener("click", makeMove);
    }
    document.getElementById("new-game").addEventListener("click", newGame);
    document.getElementById("reset").addEventListener("click", reset);

}
function newGame(){
    var board = fetchGet("/newGame");
    console.log(board);
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;
    initialize();
    for(var i = 0; i < 9; i++)
    {
        document.getElementById(i.toString()).innerHTML = null;
    }
}
function reset(){
    fetchGet("/resetGame");
}
function makeMove(){
    //var board = fetchGet("/makeMove/" + this.id);
    //console.log(board);
    this.removeEventListener("click", makeMove);
    this.innerHTML = "Y";
}
function fetchGet(toFetch){
    fetch(toFetch, {method: 'GET'})
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          // Examine the text in the response
          response.json().then(function(data) {
              console.log(data);
            return data;
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }