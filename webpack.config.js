const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, './client/src/');
const BUILD_DIR = path.resolve(__dirname, './client/build/');

module.exports = {
  // entry: path.resolve(SRC_DIR, 'index.js'),
  entry: {
    'app': [
      'react-hot-loader/patch',
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './client/src/index'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: '/',
    publicPath: 'http://localhost:5000/assets/'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader?cacheDirectory',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread','react-hot-loader/babel']
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
    ]
  },
  target: 'web',
  devServer: {
    contentBase: "./client/static",
    publicPath: "http://localhost:5000/assets/",
    hot: true,
    inline: true,
    // port: 5050
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ]
};