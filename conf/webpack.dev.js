const merge = require('webpack-merge');
const base = require('./webpack.base');

const webpack = require('webpack');
const path = require('path');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    client: ['webpack-hot-middleware/client']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
