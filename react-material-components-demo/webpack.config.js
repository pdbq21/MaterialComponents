/**
 * Created by ruslan on 18.05.17.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./App.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "/assets"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: __dirname + "/src",
        compress: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};