const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    watch:true,
    devtool: 'inline-source-map',
    devServer: {
        port: 6060,
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        watchOptions: {
            poll: true
        },
        watchContentBase: true,
        proxy: {
            "/": "http://localhost:3000"
        }
    }
});