// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// clean options
var options = [
    verbose = true,
    dry = false,
    watch = true
]

// paths to clean
var paths = [
    'dist'
]

module.exports = {
    entry: {
        app: './src/client/index.js'
    },
    output: {
        filename: '[name].main.js',
        path: __dirname,
        publicPath: '/'
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
        new CleanWebpackPlugin(paths, options)
    ]
}
