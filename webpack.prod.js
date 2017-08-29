const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const Merge = require('webpack-merge');
const autoprefixer = require('autoprefixer'); //自动加前缀
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 单独打包css
const pxtorem = require('postcss-pxtorem');

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  entry: {
    index: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js?[chunkhash]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /^node_modules$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    autoprefixer
                  ];
                }
              }
            }],
        })
      },
      {
        test: /\.less$/,
        exclude: /^node_modules$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    autoprefixer
                  ];
                }
              }
            },'less-loader']
        })
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ // 编译成生产版本
       'process.env': {
         NODE_ENV: JSON.stringify('production'),
       },
     }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({ filename: '[name].[chunkhash].css', allChunks: true, disable: false }),
  ]
})
