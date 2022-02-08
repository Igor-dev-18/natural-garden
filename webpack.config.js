const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'public','assets'),
        index: 'index.html',
        port: 9000
    },

    entry: 
    path.resolve(__dirname, 'src', 'js', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public', 'assets'),
        filename: 'bundle.js',
    },

    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }

        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                // "style-loader",
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Natural Garden',
            template: './src/index.html',
            inject: 'body',

        }),

    ],

    devtool: 'source-map',
};