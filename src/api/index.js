const express = require("express");
const router = express.Router();
const ticTacToe = require('../logic/ticTacToe');
const serverSideGame = new ticTacToe();

// Game status indicator:
//      0 - Game in progress/not started
//      1 - X has won
//      2 - Y has won
//      3 - tie

router.get("/newGame", (req, res) => {
    serverSideGame.resetBoard();
    res.status(200).send({ "TicTacToe": {
                            "GameBoard": serverSideGame.board,
                            "GameStatus": serverSideGame.winStatus,
                            "XWins": serverSideGame.xWins,
                            "OWins": serverSideGame.oWins,
                            "Draws": serverSideGame.draws,
                            "Turn": serverSideGame.playerTurn
                            }
                        });
});

router.get("/makeMove/:move", (req, res) => {
    serverSideGame.makeMove(req.params.move);
    res.send({ "TicTacToe": {
        "GameBoard": serverSideGame.board,
        "GameStatus": serverSideGame.winStatus,
        "XWins": serverSideGame.xWins,
        "OWins": serverSideGame.oWins,
        "Draws": serverSideGame.draws,
        "Turn": serverSideGame.playerTurn
        }
    });
});

router.get("/resetGame", (req, res) => {
    serverSideGame.newSession();
    res.send({ "TicTacToe": {
        "GameBoard": serverSideGame.board,
        "GameStatus": serverSideGame.winStatus,
        "XWins": serverSideGame.xWins,
        "OWins": serverSideGame.oWins,
        "Draws": serverSideGame.draws,
        "Turn": serverSideGame.playerTurn
        }
    });
});

module.exports = router;