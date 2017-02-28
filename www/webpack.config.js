'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = {
    entry: './app/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
      loaders: [{
        test: /\.html$/,
        loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
      }],

      rules:[
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'stylus-loader?resolve url']
          })
        },
        // {test: /\.styl$/, loader: ['style-loader!css-loader!stylus-loader?resolve url']},
        {
          test: /\.pug$/,
          loader: 'pug-loader'
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html 
          filename: 'index.html',
          template: './app/index.pug'
        })
    ],
    watch: true,
    watchOptions: {
      aggregateTimeout: 100
    },

    devtool: 'source-map',

    devServer: {
      contentBase: './public',
      hot: true,
      inline: true
    }
};
