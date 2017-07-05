const path = require('path');
const webpack = require('webpack');

let config = require('./webpack.config');

config.entry.bakaani = [
  './client/src/bakaani.js'
];

config.output = {
  filename: '[name]-[chunkhash].js',
  path: path.resolve(__dirname, '../../public/assets'),
  publicPath: 'http://bakaani.com/assets'
};

// config.plugins.unshift(
//   new CleanWebpackPlugin('assets', {
//     root: path.resolve(__dirname, '../../public')
//   })
// );

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      drop_console: true,
      global_defs: {
        DEBUG: false
      }
    }
  }),
  new webpack.DefinePlugin({
    DEBUG: JSON.stringify(false),
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  // new ExtractTextPlugin({
  //   filename: '[name]-[chunkhash].css'
  // }),
]);

config.devtool = 'nosources-source-map';

module.exports = config;
