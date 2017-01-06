const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const shared = require('./shared.js');

const bundleName = `${pkg.name}-${pkg.version}.js`;

module.exports = {
  devtool: 'sourcemap',
  stats: 'error-only',
  entry: [
    'webpack-hot-middleware/client',
    shared.entry
  ],
  output: {
    path: '/',
    filename: `/${bundleName}`
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loaders: ['babel'],
      include: path.resolve(__dirname, '../src')
    }, {
      test: /\.less$/,
      loader: 'style!css!autoprefixer!less',
      include: path.resolve(__dirname, '../src')
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
      include: path.resolve(__dirname, '../src')
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file',
      include: path.resolve(__dirname, '../src')
    }]
  },
  resolve: shared.resolve,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.RUNTIME_ENV': '"client"',
      'process.env.API_URL': '"/"'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
