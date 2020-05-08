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
        proxy: {
            '/world/**': {
                target: 'https://api.covid19api.com',
                pathRewrite: { '^/world': 'https://api.covid19api.com' },
                changeOrigin: true,
                secure: true
            },
            '/india/**': {
                target: 'https://api.covid19india.org',
                pathRewrite: { '^/india': 'https://api.covid19india.org' },
                changeOrigin: true,
                secure: true
            }
        }
    }
};
