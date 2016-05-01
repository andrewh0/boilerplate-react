var path = require('path');
var webpack = require('webpack');

var PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './client/index.js',
  output: { path: __dirname, filename: './client/bundle.js' },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ] : []
};
