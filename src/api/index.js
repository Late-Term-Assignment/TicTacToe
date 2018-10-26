const express = require("express");
const router = express.Router();
//const ticTacToe = require("../logic/ticTacToe");
//const game = new ticTacToe();

router.post("/newGame", (req, res) => {
    game.resetBoard();
    res.send('Ok');
});
  
router.post("/getBoard", (req, res) => {
    res.send({ "GameBoard": req.body.game.board });
});

router.post("/makeMove/:move", (req, res) => {
    game.makeMove(req.move);
    res.send('Ok');
});

module.exports = router;