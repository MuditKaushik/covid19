var webpack = require('webpack');
var path = require('path');
var copyFilePlugin = require('copy-webpack-plugin');
var rootDirectory = process.cwd();

var typescriptTestFileRule = {
    test: /(?:\.spec\.ts)$/,
    exclude: /node_modules/,
    use: [{
        loader: 'ts-loader',
        options: { configFile: path.resolve(rootDirectory, 'tsconfig.spec.json') }
    }]
};

module.exports = {
    mode: 'none',
    target: 'node',
    devtool: 'inline-source-map',
    entry: {
        polyfills: path.resolve(rootDirectory, './src/app/polyfills.ts'),
        testconfig: path.resolve(rootDirectory, './src/test/app-spec-setup.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(rootDirectory, './test/')
    }
    ,
    module: {
        rules: [typescriptTestFileRule]
    },
    plugins: [
        new copyFilePlugin([
            {
                from: path.resolve(rootDirectory, './src/index.html'),
                to: path.resolve(rootDirectory, './test/')
            }
        ])
    ]
};
