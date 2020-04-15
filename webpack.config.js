var webpackMerge = require('webpack-merge');
var webpackCommon = require('./webpack-config/webpack.common');
var webpackDev = require('./webpack-config/webpack.dev');
var webpackProd = require('./webpack-config/webpack.prod');
var webpackSpec = require('./webpack-config/webpack.spec');

module.exports = (env) => {
    if (env && env.production) {
        logMessage('Production');
        return webpackMerge(webpackCommon, webpackProd);
    } else if (env && env.build) {
        logMessage('building');
        webpackCommon.mode = 'development';
        return webpackCommon;
    } else {
        logMessage('Dev building and hosting');
        return webpackMerge(webpackCommon, webpackDev);
    }
};

function logMessage(envType) {
    console.log(`running ${envType}`);
};
