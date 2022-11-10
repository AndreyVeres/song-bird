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
        gallery: path.resolve(__dirname, 'src', 'pages', 'gallery', 'gallery.js'),
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
            filename: 'gallery.html',
            template: path.resolve(__dirname, 'src', 'pages', 'gallery', 'gallery.html'),
            minify: false,
            chunks: ['gallery']
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
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.mp3$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'audio/[name][ext]'
                }
            }
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/i,
            //     loader: 'file-loader',
            //     options: {
            //       name(resourcePath, resourceQuery) {
            //         // `resourcePath` - `/absolute/path/to/file.js`
            //         // `resourceQuery` - `?foo=bar`

            //         if (process.env.NODE_ENV === 'development') {
            //           return '[path][name].[ext]';
            //         }

            //         return '[contenthash].[ext]';
            //       },
            //     },
            //   },

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