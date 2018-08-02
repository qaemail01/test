var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');
module.exports = {
    context: __dirname + '/src/main/webapp/app',
    entry: {
        app: './index.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/src/main/resources/static',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ]
};