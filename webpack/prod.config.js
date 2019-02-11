const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const baseConfig = require('./base.config.js');
const createHtmlWebpackPlugin = require('./plugins/htmlWebpackPlugin.config.js');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '..', 'client', 'index.js'),
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/assets/'
  },
  stats: {
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false
          }
        }
      })
    ],
    runtimeChunk: false, // runtimeChunk + inlineSource is not compatible with loadable-component for now
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/
        }
      }
    },
    concatenateModules: true
  },
  plugins: [
    createHtmlWebpackPlugin({ ssr: true }),
    new InlineSourcePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
