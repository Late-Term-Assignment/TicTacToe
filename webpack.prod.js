const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production'
    // node: {
    //     fs: 'empty',
    //     net: 'empty'
    //   }
});