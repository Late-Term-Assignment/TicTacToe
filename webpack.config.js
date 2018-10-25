// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')

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
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Greeting page'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(paths, options)
    ]
}
