const API_PORT = 6060;
const app = require('./src/server/api');

app.listen(API_PORT, () => {
    console.log("Server is running on port " + API_PORT);
});