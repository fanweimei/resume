const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack','babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href'],
            },
          },
        ],
      },
      {
        test: /favicon\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000, // 单位是字节
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [' ', '.js', '.jsx', '.less', '.json'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'], // 将公共的代码打包到vendor.js中，将文件名打包到mainfest中，这样vendor文件名的改变，不会引起其它js文件在打包过程时发生改变
    }),
    new webpack.DefinePlugin({ // 插入环境变量

    }),
    new webpack.ProvidePlugin({ //配置全局变量
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],
};
