const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
	mode: (isProduction) ? 'production' : 'development',
	entry: './src/index.jsx',
	watch: !isProduction,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/env",
						"@babel/preset-react"
					]
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				],
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'An interesting title'
		})
	],
};