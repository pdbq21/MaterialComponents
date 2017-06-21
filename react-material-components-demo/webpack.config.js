/**
 * Created by ruslan on 18.05.17.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + "/src",
    entry: {
        App: "./App.js",
    },
    output: {
        path: __dirname + "/",
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: __dirname + "/src",
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'latest', 'env', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};