const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
// const PKG = require('./package.json')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'vant-docs': './docs/src/index.js',
    'vant-mobile': './docs/src/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      // packages: path.join(__dirname, '../packages'),
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      { 
        test: /\.(png|jpg|gif)$/, 
        use: [{ loader: 'url-loader',options: { limit: 8192 } }] 
      },
      {
        test: /\.(css|postcss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          'fast-vue-md-loader'
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      }
    ],
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new UglifyJSPlugin({
  //       include: /\.min\.js$/,
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true,
  //       uglifyOptions: {
  //         compress: {
  //           warnings: false,
  //           comparisons: false,
  //           drop_console: true,
  //         },
  //         mangle: {
  //           safari10: true,
  //         },
  //         output: {
  //           comments: false,
  //           ascii_only: true,
  //         },
  //       },
  //     }),
  //   ],
  // },
  devServer: {
    contentBase: path.join(__dirname, "../docs/public"),
    compress: true,
    hot: true,
    https: false,
    clientLogLevel: 'error'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['vant-docs'],
      template: 'docs/src/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['vant-mobile'],
      template: 'docs/src/index.tpl',
      filename: 'mobile.html',
      inject: true
    })
  ]
};