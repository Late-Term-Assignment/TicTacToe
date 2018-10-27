const path = require('path');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var options =  [
    verbose = true,
    dry = false,
    watch = true
];

var paths = [
    'dist'
];

module.exports = {
    entry: {
        app: './src/app.js'
    },
    plugins: [
        new CleanWebPackPlugin([paths, options]),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
    ],
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};