const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const config = {
  stats: 'minimal',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c|pc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader'
          },
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = config;