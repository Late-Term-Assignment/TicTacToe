// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.sendFile(__dirname);
});
app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});

module.exports = app;