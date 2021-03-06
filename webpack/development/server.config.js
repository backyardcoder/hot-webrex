import path from 'path';
import NodemonPlugin from 'nodemon-webpack-plugin';
import NodeExternals from 'webpack-node-externals';

const basePath = path.resolve(__dirname, '../../');
const buildPath = path.resolve(basePath, 'build');

export default {
  target: 'node',
  mode: 'development',
  entry: './src/server',
  output: {
    filename: 'index.js',
    path: path.resolve(buildPath, 'server')
  },
  externals: [NodeExternals()],
  plugins: [new NodemonPlugin()],
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
