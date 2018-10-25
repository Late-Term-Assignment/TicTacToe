// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/client/index.js'
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Greeting page'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
