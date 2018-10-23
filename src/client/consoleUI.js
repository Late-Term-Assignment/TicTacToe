//consoleUI.js

const ticTacToe = require('../logic/ticTacToe.js');
const game = new ticTacToe();

class consoleUI {
    constructor() {
        startGame = false;
    }


    printBoard() {
        console.log(" _______________________");
        console.log("|       |       |       |");
        console.log("|   "
        + game.board[0] + "   |   " 
        + game.board[1] + "   |   " 
        + game.board[2] + "   |" );
        console.log("|_______|_______|_______|");
        console.log("|       |       |       |");
        console.log("|   " 
        + game.board[3] + "   |   " 
        + game.board[4] + "   |   " 
        + game.board[5] + "   |" );
        console.log("|_______|_______|_______|");
        console.log("|       |       |       |");
        console.log("|   " 
        + game.board[6] + "   |   " 
        + game.board[7] + "   |   " 
        + game.board[8] + "   |" );
        console.log("|_______|_______|_______|");
        
    }
}

const cui = new consoleUI();
cui.printBoard();