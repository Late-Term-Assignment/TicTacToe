const express = require("express");
const app = express();
const ticTacToe = require("./logic/ticTacToe")

app.get("/ticTacToe", (req, res) => {
	res.send({"name": ticTacToe()})
});

module.exports = app;