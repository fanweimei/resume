const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const pxtorem = require('postcss-pxtorem'); //px自动转为rem

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  entry: {
    index: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    vendor: ['react', 'react-dom']
  },
  output: {
    /*
      把资源文件js，图片等都放到assets目录下,一般不要使用，除非确定将一些静态资源js和图片放入某个服务器下作为缓存
     */
    // publicPath: '/assets/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader',{
          loader: 'postcss-loader',
          options: {}
        }]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins(){}
          }
        }, 'less-loader']
      },
    ]
  },
  plugins: [
      // new webpack.HotModuleReplacementPlugin()
    // 在package.json中加入--hot，开启热更新，可以不用在devServer配置hot，也不用在这里引入插件，这一切会自动完成
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true //不存在的路径，默认打开根目录下的index.html
    // historyApiFallback: {
    //   index: '/assets/'  //与output中publicPath路径一致
    // }
  },
  devtool: 'eval-source-map'  //在package.json中加入-d，开启调试模式，可以不用写这行代码
})
