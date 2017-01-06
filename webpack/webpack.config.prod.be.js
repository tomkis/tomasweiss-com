const path = require('path');
const fs = require('fs');
const shared = require('./shared.js');

const jsBundleName = 'server.js';

const nodeModules = fs
  .readdirSync('node_modules')
  .filter(module => ['.bin'].indexOf(module) === -1)
  .reduce((memo, module) => Object.assign({}, memo, {
    [module]: `commonjs ${module}`
  }), {});

module.exports = {
  entry: './src/server/main.js',
  target: 'node',
  externals: nodeModules,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `/${jsBundleName}`
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loaders: ['babel'],
      include: path.resolve(__dirname, '../src')
    }, {
      test: /\.json/,
      loaders: ['json'],
      exclude: path.resolve(__dirname, '../node_modules')
    }, {
      test: /\.less$/,
      loader: 'css/locals?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
      include: path.resolve(__dirname, '../src')
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file',
      include: path.resolve(__dirname, '../src')
    }]
  },
  resolve: shared.resolve,
  plugins: []
};
