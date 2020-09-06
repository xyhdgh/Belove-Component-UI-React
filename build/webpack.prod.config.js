const path = require('path')
const { merge } = require('webpack-merge')
const commonWebpackConfig = require('./webpack.common.config')

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'Beloved-UI-component-react.min.js',
    libraryTarget: 'umd',
  }
})