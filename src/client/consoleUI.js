//consoleUI.js

const ticTacToe = require('../logic/ticTacToe.js');
const readline = require('readline');
const game = new ticTacToe();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

class consoleUI {
    constructor() {
        this.startGame = false;
    }

    beginGame() {
        console.log("Welcome to Tic-Tak-Toe! ");
        console.log("The rules are simple, if you are not familiar with them, google them.");
        rl.question('If you want to begin the game, types (b)egin! If you want to quit type (q)uit.\t',
        (answer) => {
            if(answer == 'b') {
                rl.close();
                this.startGame = true; 
                cui.printBoard();
           }
           else if(answer == 'q') {
               rl.close();
               console.log("Thank you, come again!");
           }
           else {
               console.log("No legal input, try again!"); 
               cui.beginGame();
           } 
        });
    };

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
cui.beginGame();
//cui.printBoard();
module.exports = consoleUI;
