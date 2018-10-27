const express = require("express");
const router = express.Router();

const ticTacToe = require('../logic/ticTacToe')
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
                            "GameStatus": serverSideGame.winStatus
                            }
                        });
});
  
router.post("/getBoard", (req, res) => {
    res.send({ "GameBoard": serverSideGame.board });
});

router.post("/makeMove/:move", (req, res) => {
    serverSideGame.makeMove(req.params.move);
    res.status(200).send('Ok');
});

module.exports = router;