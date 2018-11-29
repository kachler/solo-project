const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.js',

  output: {
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/client',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$|\.es6$\|\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
        ]
      }
    ]
  }
};
