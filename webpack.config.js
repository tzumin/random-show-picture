var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'app/index'),
  output: {
      path: __dirname,
      filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname
  },
  resolve: {
    extensions: ['','.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  }
};
