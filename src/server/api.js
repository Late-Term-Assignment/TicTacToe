const express = require("express");
const app = express();
const ticTacToeGame = require("../logic/ticTacToe");
const game = new ticTacToeGame();

app.get("/ticTacToe/gameBoardStatus", (req, res) => {
	res.send({"gameBoardStatus": game.board})
});

app.get("/ticTacToe/currentPlayerStatus", (req, res) => {
	res.send({"currentPlayerStatus": game.playerTurn})
});

module.exports = app;