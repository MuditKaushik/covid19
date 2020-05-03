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
            '/covid19world/**': {
                target: 'https://api.covid19api.com',
                pathRewrite: { '^/covid19world': 'https://api.covid19api.com' },
                changeOrigin: true,
                secure: false
            },
            '/covid19india/**': {
                target: 'https://api.covid19india.org',
                pathRewrite: { '^/covid19india': 'https://api.covid19india.org' },
                changeOrigin: true,
                secure: false
            }
        }
    }
};
