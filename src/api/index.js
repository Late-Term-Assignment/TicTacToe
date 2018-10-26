const express = require("express");
const router = express.Router();

const ticTacToe = require('../logic/ticTacToe')
const serverSideGame = new ticTacToe();


router.get("/newGame", (req, res) => {
    serverSideGame.resetBoard();
    res.status(200).send({"game": serverSideGame});
});
  
router.post("/getBoard", (req, res) => {
    res.send({ "GameBoard": serverSideGame.board });
});

router.post("/makeMove/:move", (req, res) => {
    serverSideGame.makeMove(req.params.move);
    serverSideGame.changePlayerTurn();
    res.status(200).send('Ok');
});

module.exports = router;