const express = require("express");
const app = express();
const ticTacToeGame = require("./logic/ticTacToe");
const game = new ticTacToeGame();

app.get("/ticTacToe", (req, res) => {
	res.send({"gameBoardStatus": game.board})
});

module.exports = app;