// webLogic.js
function initialize(){
    for(var i = 0; i < 9; i++){
        document.getElementById(i.toString()).addEventListener("click", makeMove);
    }
}
initialize();
function makeMove()
{
    function enableTxt(elem) {
      var id = $(elem).attr("id");
      fetchThis("makeMove/" + id);
    }
    this.removeEventListener("click", makeMove);
    //fetchThis("getBoard");
    this.innerHTML = "Y";
}
function fetchThis(toFetch)
{
  fetch("http://localhost:3000/" + toFetch)
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
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}


