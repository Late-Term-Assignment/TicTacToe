// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Greeting page'
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        compress: true/*
        proxy: {
            '/api/**': {
              target: 'http://localhost:8084',
              secure: false,
            }
        }*/
    }
}
