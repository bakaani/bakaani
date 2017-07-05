const path = require('path');
const webpack = require('webpack');

let config = require('./webpack.config');

config.entry.bakaani = [
  'react-hot-loader/patch',
  './client/src/bakaani.js'
];

config.output = {
  filename: '[name].js',
  path: path.resolve(__dirname, '../../public/assets'),
  publicPath: 'http://localhost:8080/assets'
};

config.devServer = {
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  }
};

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    DEBUG: JSON.stringify(true)
  })
]);

config.devtool = 'cheap-module-eval-source-map';

module.exports = config;
