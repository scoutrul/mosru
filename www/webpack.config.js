'use strict';

var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractStyles = new ExtractTextPlugin("styles.css");

module.exports = {
    entry: './app/index',
    
    module: {
      loaders: [{
        test: /\.html$/,
        loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
      }],

      rules: [{
               test: /\.styl$/,
               use: extractStyles.extract({
                     fallback: 'postcss-loader',
                     use: ['css-loader?importLoaders=1!postcss-loader', 'stylus-loader?resolve url']
                 })
             },
             {
               test: /\.pug$/,
               loader: 'pug-loader'
             }
             
      ]},
    plugins: [
        extractStyles,

        new HtmlWebpackPlugin({ 
          filename: 'index.html',
          template: './app/index.pug'
        }),
        require('autoprefixer')
    ],

    watch: true,

    // devtool: 'source-map',

    devServer: {
      contentBase: './public',
      hot: true,
      inline: true
    }


    ,output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    }
}
