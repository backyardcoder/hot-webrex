const path = require('path');

const basePath = path.resolve(__dirname, '../../');
const buildPath = path.resolve(basePath, 'build');

export default {
	target: 'web',
	mode: 'production',
	entry: './src/client',
	output: {
		publicPath: '/assets/',
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
	}
};