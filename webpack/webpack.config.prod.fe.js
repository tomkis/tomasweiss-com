const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('../package.json');
const shared = require('./shared.js');

const appName = `${pkg.name}-${pkg.version}`;
const jsBundleName = `${appName}.min.js`;
const cssBundleName = `${appName}.min.css`;

module.exports = {
  devtool: 'sourcemap',
  entry: shared.entry,
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: `/${jsBundleName}`
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loaders: ['babel'],
      include: path.resolve(__dirname, '../src')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less'),
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
      'process.env.NODE_ENV': '"production"',
      'process.env.RUNTIME_ENV': '"client"',
      'process.env.API_URL': '"/"'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin(cssBundleName),
    new CopyWebpackPlugin([{
      from: 'static'
    }])
  ]
};
