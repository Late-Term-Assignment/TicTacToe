const express = require("express");
const router = express.Router();
const ticTacToe = require("../logic/ticTacToe");
const game = new ticTacToe();