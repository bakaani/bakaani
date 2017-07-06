const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let config = require('./webpack.config');

config.entry.bakaani = [
  './client/src/bakaani.js'
];

config.module.rules = config.module.rules.concat([
  {
    test: /\.(css|scss|sass)$/,
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    })
  },
  {
    test: /\.(jpg|jpeg|png|gif|ttf|woff|woff2|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name]-[hash].[ext]'
        }
      }
    ]
  }
]);

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
