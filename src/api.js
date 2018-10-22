const express = require("express");
const app = express();
const ticTacToe = require("./logic/ticTacToe");
const main = new ticTacToe();

app.get("/ticTacToe", (req, res) => {
	res.send({"name": main.initBoard()})
});

module.exports = app;