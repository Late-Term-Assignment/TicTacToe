const express = require("express");
const router = express.Router();
const ticTacToe = require("../logic/ticTacToe");
const game = new ticTacToe();

router.post("/newGame", (req, res) => {
    game.resetBoard();
    res.send('Test');
});
  
module.exports = router;