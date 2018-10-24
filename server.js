const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

// Start api server and frontend server
const API_PORT = 6060;
const FRONT_PORT = 3000;
const app = require('./src/server/api');

server.listen(FRONT_PORT, 'localhost', () => {
  console.log('dev server listening on port ' + FRONT_PORT);
});

app.listen(API_PORT, () => {
    console.log("Server is running on port " + API_PORT);
});