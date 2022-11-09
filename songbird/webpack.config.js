require("@babel/polyfill");
const path = require('path');
// console.log(path.resolve(__dirname, 'src', 'pages', 'main', 'main.html'))
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        open: true,
    },
    // entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
   
    entry: {
        main: path.resolve(__dirname, 'src', 'pages', 'main', 'index.js'),
        results: path.resolve(__dirname, 'src', 'pages', 'results', 'results.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'pages', 'main', 'index.html'),
            chunks: ['main']

        }),
        new HtmlWebpackPlugin({
            filename: 'results.html',
            template: path.resolve(__dirname, 'src', 'pages', 'results', 'results.html'),
            minify: false,
            chunks: ['results']
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            // {
            //     test: /\.m?js$/i,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },
        ],
    }
}