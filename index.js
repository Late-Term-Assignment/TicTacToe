// index.js
const app = require("./src/server/api");
const PORT = process.env.PORT || 3000;

const server = require('./server.js');

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});

module.exports = app;