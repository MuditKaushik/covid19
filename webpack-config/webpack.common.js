var webpack = require('webpack');
var path = require('path');
var ngToolWebpack = require('@ngtools/webpack');
var minCssPlugin = require('mini-css-extract-plugin');
var copyFilePlugin = require('copy-webpack-plugin');
var rootDirectory = process.cwd();

var typescriptFileRule = {
    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
    exclude: [/node_modules/],
    loader: '@ngtools/webpack'
};

var fontAndImageFileRules = {
    test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2|otf|ico)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: '/assets/fonts'
            }
        }
    ]
};

var stylingFileRules = {
    test: /\.(sc|c|sa)ss$/,
    exclude: /node_modules/,
    use: [
        {
            loader: minCssPlugin.loader,
            options: {
                esModule: true
            }
        },
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }
    ]
};

function webpackPlugins() {
    var angularAOTCompiler = new ngToolWebpack.AngularCompilerPlugin({
        tsConfigPath: path.resolve(rootDirectory, './tsconfig.json'),
        mainPath: path.resolve(rootDirectory, './src/app/app-main.ts'),
        sourceMap: true,
        directTemplateLoading: true,
        skipCodeGeneration: false,
        compilerOptions: {
            skipMetadataEmit: true,
            fullTemplateTypeCheck: true,
            strictInjectionParameters: true,
            skipTemplateCodegen: true,
            enableResourceInlining: true,
            enableIvy: true,
            generateCodeForLibraries: true
        }
    });
    var cssPlugin = new minCssPlugin({
        filename: 'style.css',
        ignoreOrder: false
    });
    var copyPlugin = new copyFilePlugin([
        {
            from: path.resolve(rootDirectory, './src/index.html'),
            to: path.resolve(rootDirectory, './docs/')
        },
        {
            from: path.resolve(rootDirectory, './src/assets/'),
            to: path.resolve(rootDirectory, './docs/assets/')
        },
        {
            from: path.resolve(rootDirectory, './src/favicon.ico'),
            to: path.resolve(rootDirectory, './docs/')
        },
        {
            from: path.resolve(rootDirectory, './src/i18n-lang/'),
            to: path.resolve(rootDirectory, './docs/assets/i18n/')
        }
    ]);
    var webpackLoaderPlugin = new webpack.LoaderOptionsPlugin({ debug: true });
    return [angularAOTCompiler, cssPlugin, copyPlugin, webpackLoaderPlugin];
};

module.exports = {
    context: path.resolve(rootDirectory, './src'),
    entry: {
        main: [
            path.resolve(rootDirectory, './src/app/app-main.ts'),
            path.resolve(rootDirectory, './src/scss/main.scss')
        ],
        polyfills: path.resolve(rootDirectory, './src/app/polyfills.ts'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(rootDirectory, './docs/')
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss', '.css']
    },
    plugins: webpackPlugins(),
    module: {
        rules: [typescriptFileRule, fontAndImageFileRules, stylingFileRules]
    }
};
