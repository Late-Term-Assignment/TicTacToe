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
        console.log("\t\t\tWelcome to Tic-Tac-Toe! ");
        console.log("\tThe rules are simple, if you are not familiar with them, google them.");
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
        cui.printBoard();
        cui.printScore();
        rl.question("It's your turn player " + game.playerTurn + ", please select what number in the board you want to fill in\n > ",
        (answer) => {
            if(answer > 0 && answer < 10 && game.validateInput(answer)) {
                game.makeMove(answer);
                game.checkWinStatus();
                if(game.winStatus != 0) {
                    game.updateScore();
                    cui.printWinner(game.winStatus);

                }
                else {
                    game.changePlayerTurn();
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
        cui.printBoard();
        cui.printScore();
        if(winner === 1) {
            console.log("Good job player " + game.playerTurn + " you won!")
        }
        else if(winner === 2) {
            console.log("A draw! What are the odds?");
        }
        cui.printGameOver();
    }

    printGameOver() {
        rl.question("Well that was fun, shall we go again? (y/n) or RESET the whole session? (r)\n> ", (answer) => {
            if(answer === 'y') {
                game.resetBoard();
                cui.playersPlay();
            }
            else if(answer === 'n') {
                console.log("Thanks for playing! Game over!");
            }
            else if(answer === 'r') {
                console.log("A new gaming session has started, have fun")
                game.newSession();
                cui.playersPlay();
            }
            else { 
                console.log("Illegal character input! Try again");
                cui.printGameOver();
            }
        });
    }

    printScore() {
        console.log('\t__________________________________________');
        console.log('\t                  SCORE');
        console.log('\t  X : ' + game.xWins + '       ' 
        + '   Draws : ' + game.draws + '     '
        + '   Y : ' + game.oWins);
        console.log('\t__________________________________________\n');
    }

    printBoard() {
        console.log("\t\t _______________________");
        console.log("\t\t|       |       |       |");
        console.log("\t\t|   "
        + game.board[0] + "   |   " 
        + game.board[1] + "   |   " 
        + game.board[2] + "   |" );
        console.log("\t\t|_______|_______|_______|");
        console.log("\t\t|       |       |       |");
        console.log("\t\t|   " 
        + game.board[3] + "   |   " 
        + game.board[4] + "   |   " 
        + game.board[5] + "   |" );
        console.log("\t\t|_______|_______|_______|");
        console.log("\t\t|       |       |       |");
        console.log("\t\t|   " 
        + game.board[6] + "   |   " 
        + game.board[7] + "   |   " 
        + game.board[8] + "   |" );
        console.log("\t\t|_______|_______|_______|");
        
    }
}

const cui = new consoleUI();
cui.beginGame();
module.exports = consoleUI;
