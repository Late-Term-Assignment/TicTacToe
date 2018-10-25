// index.js
const express = require('express');
const path = require('path');
// app = require("./src/server/api");
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(__dirname);
})

const server = require('./server.js');

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});

module.exports = app;