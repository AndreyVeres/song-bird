require("@babel/polyfill");

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined;



module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        open: true
    },
    // entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
    entry: {
        page1: path.resolve(__dirname, 'src', 'js', 'page1.js'),
        page2: path.resolve(__dirname, 'src', 'js', 'page2.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].bundle.js'
    },
    // optimizations : {
    //     splitChunks : {
    //         chunks : 'all',
    //         maxInitialRequest :Infinity ,
    //         cacheGroups : {

    //         }
    //     }
    // }
    plugins: [
        new HtmlWebpackPlugin({
            filename : 'index.html' ,
            template: path.resolve(__dirname, 'src','index.html') ,
            minify : false ,
            chunks : ['page1']
            
        }),
        new HtmlWebpackPlugin({

            filename : 'index2.html',
            template: path.resolve(__dirname, 'src','index2.html'),
            minify :false,
            chunks : ['page2']
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
            {
                test: /\.m?js$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

        ],

    }

}