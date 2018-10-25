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

app.get("/ticTacToe/currentPlayerStatusChanged", (req, res) => {
	game.changePlayerTurn()
	res.send({"currentPlayerStatusChanged": game.playerTurn}) //use change function and then read variable
});

app.get("/ticTacToe/moveMade", (req, res) => {
	game.makeMove(3)
	res.send({"moveMade": game.board}) //use change function and then read variable
});


module.exports = app;