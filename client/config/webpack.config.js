const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    vendors: ['lodash', 'react', 'react-dom']
  },

  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss'
    ],
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ManifestPlugin({
      fileName: 'assets.json'
    }),
    new webpack.ProvidePlugin({
      '_': 'lodash'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 2,
      names: ['bakaani', 'vendors'],
    }),
  ]
};
