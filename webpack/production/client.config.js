import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const basePath = path.resolve(__dirname, '../../');
const buildPath = path.resolve(basePath, 'build');

export const cssFileName = 'client.min.css';

export default {
  target: 'web',
  mode: 'production',
  entry: './src/client',
  output: {
    publicPath: '/assets/',
    filename: 'client.bundle.js',
    path: path.join(buildPath, 'client')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: cssFileName
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};
