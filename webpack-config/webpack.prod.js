var webpack = require('webpack');
var path = require('path');
var treaserMinify = require('terser-webpack-plugin');
var minifyCss = require('optimize-css-assets-webpack-plugin');

var minificationJsConfig = new treaserMinify({
    cache: true,
    extractComments: false,
    test: /\.js(\?.*)?$/i,
    include: /\.js$/,
    parallel: 2,
    sourceMap: false,
    terserOptions: {
        toplevel: true,
        mangle: true,
        safari10: true,
        parse: {
            html5_comments: false,
            ecma: 5,
            shebang: false
        },
        compress: {
            drop_console: false,
            drop_debugger: true
        },
        output: {
            comments: false,
            beautify: false
        }
    }
});

var minificationCssConfig = new minifyCss({
    assetNameRegExp: /style\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
    },
    canPrint: true
});

module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [minificationJsConfig, minificationCssConfig],
        removeEmptyChunks: true,
        mergeDuplicateChunks: true
    }
};
