// const webpack = require('webpack');
const path = require('path');

module.exports = {
  // context: __dirname + '/client/public',
  entry: `${__dirname}/client/index.jsx`,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(`${__dirname}/public/dist`),
    filename: 'bundle.js',
  },
};
