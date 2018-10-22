// src/logic/ticTacToe.js
class ticTacToe
{
    initBoard() {
        return [null, null, null, null, null, null, null, null, null];
    }
    game() {
        var whilePlaying = true;
        while(whilePlaying) {
            return "X wins";
        }
    }
    xInput(answer){
        return parseInt(answer);
    }
    oInput(answer){
        return parseInt(answer);
    }
}


module.exports = ticTacToe;
