const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'webpack-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$|\.es6$\|\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015'] },
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
