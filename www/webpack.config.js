'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

	entry: path.resolve(__dirname, './app/script'),
	
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public')
	},

	watch: true,

	// devtool: 'source-map',

	devServer: {
		contentBase: './public',
		hot: true,
		inline: true
	},

	module: {

		rules: [{
			   	test: /stylus.styl/,
			   	use: ExtractTextPlugin.extract({
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
			new ExtractTextPlugin('styles.css'),

			new HtmlWebpackPlugin({ 
				filename: 'index.html',
				template: './app/index.pug'
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		],
}