// webLogic.js
initialize();
function initialize(){
    for(var i = 0; i < 9; i++){
        document.getElementById(i.toString()).addEventListener("click", makeMove);
    }
    document.getElementById("new-game").addEventListener("click", newGame);
    document.getElementById("reset").addEventListener("click", reset);

}
function newGame(){
    fetchGet("newGame");
}
function reset(){
}
function makeMove(){
    fetchPost("makeMove/" + this.id);
    this.removeEventListener("click", makeMove);
    this.innerHTML = "Y";
}
function fetchPost(toFetch){
  fetch("/" + toFetch, {method: 'POST'})
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