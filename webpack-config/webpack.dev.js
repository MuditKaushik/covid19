var webpack = require('webpack');
var path = require('path');
var rootDirectory = process.cwd();

module.exports = {
    mode: 'development',
    devtool: '#inline-source-map',
    target: 'web',
    devServer: {
        contentBase: path.resolve(rootDirectory, './docs'),
        hot: true,
        port: 4200,
        index: 'index.html',
        filename: 'main.js',
        historyApiFallback: true,
        proxy: {}
    }
};
