const path = require('path');
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
        path: path.resolve(__dirname, './src/client/index.js')
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/client/index.html'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
        ]
      },
    target: 'web'
};