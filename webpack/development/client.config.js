const path = require('path');
const webpack = require('webpack');

const basePath = path.resolve(__dirname, '../../');
const buildPath = path.resolve(basePath, 'build');
const outputPublicPath = 'http://localhost:8080/assets/';

export default {
	watch: true,
	target: 'web',
	mode: 'development',
	entry: './src/client',
	output: {
		publicPath: outputPublicPath,
		filename: 'client.bundle.js',
		path: path.join(buildPath, 'client'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	// These are passed as the secondary arguments for dev server creation
	devServer: {
		hot: true,
		port: 8080,
		inline: true,
		host: 'localhost',
		publicPath: outputPublicPath,
		watchOptions: {
			poll: true
		},
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	}
};