// webLogic.js
const ticTacToe = require('./ticTacToe');
class webLogic
{
    constructor(){
        this.game = new ticTacToe();
    }
}
module.exports = webLogic;



/*fetch("https://arcane-crag-40980.herokuapp.com/")
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
  });*/