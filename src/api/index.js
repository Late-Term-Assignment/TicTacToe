const express = require("express");
const router = express.Router();
const ticTacToe = require("../logic/ticTacToe");
const game = new ticTacToe();

router.get("/newGame", (req, res) => {
    res.status(200).send({ "GameBoard": game.newSession() });
});
  
module.exports = router;