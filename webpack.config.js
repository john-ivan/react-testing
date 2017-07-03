const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const tapered = require('tapered.js/tapered-webpack-plugin.js');
const webpack = require('webpack');
// import WriteFilePlugin from 'write-file-webpack-plugin';


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/client'),
    filename: 'bundle.js'
  },
   module: {
    rules: [
        {
          test: /\.js$/,
          use: 'babel-loader'
        },
         {
           test: /\.scss$/,
           use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
              }
    ]
   },


  // module: {
  //   loaders: [
  //     {
  //       test: /jsx?/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['es2015', 'env', 'react']
  //       }

  //     },
  //     {
  //       test: /scss$/,
  //       exclude: /node_modules/,
  //       loaders: ['style', 'css', 'sass']
  //     }
  //   ]
  // },
  plugins : [
new tapered(),
new webpack.optimize.UglifyJsPlugin({
  compress: false,
                mangle: false,
                comments: true,
                beautify: true,
    extractComments: {
    condition: /ß∂dNß0j1/,
    filename: '../tapered-tests/tests/test.js'
    },
  }),
  ]
}
