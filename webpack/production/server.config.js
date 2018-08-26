import path from 'path';
import NodeExternals from 'webpack-node-externals';

const basePath = path.resolve(__dirname, '../../');
const buildPath = path.resolve(basePath, 'build');

export default {
  target: 'node',
  mode: 'production',
  entry: './src/server',
  output: {
    filename: 'index.js',
    path: path.resolve(buildPath, 'server')
  },
  externals: [NodeExternals()],
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
