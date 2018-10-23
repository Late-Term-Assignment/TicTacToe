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
        this.isOver = false;
    }

    beginGame() {
        console.log("Welcome to Tic-Tak-Toe! ");
        console.log("The rules are simple, if you are not familiar with them, google them.");
        rl.question('If you want to begin the game, types (b)egin! If you want to quit type (q)uit.\n> ',
        (answer) => {
            if(answer == 'b') {
                cui.playersPlay();
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
    }

    playersPlay() {
        console.log(' __________________________________________');
        console.log('                   SCORE');
        console.log('      X : ' + game.xWins + '       ' 
        + 'Draws : ' + game.draws + '     '
        + 'Y : ' + game.oWins);
        console.log(' __________________________________________');
        rl.question("It's your turn player " + game.playerTurn + ", please select what number in the board you want to fill in\n > ",
        (answer) => {
            if(answer > 0 && answer < 10) {
                if(game.validateInput(answer)) {
                    game.makeMove(answer);
                    game.checkWinStatus();
                    if(game.winStatus != 0) {
                        game.updateScore();
                        cui.printWinner(game.winStatus);

                    }
                    cui.printBoard();
                    cui.playersPlay();
                }
            }
            else {
                console.log("Illegal number input, insert a number from 1-9 in an Open space.")
                cui.playersPlay();
            }
        });
    }

    printWinner(winner) {
       
    }

    printGameOver() {

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
cui.beginGame();
module.exports = consoleUI;
