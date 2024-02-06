const path = require('path');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true, // очистка public/bundle.js перед каждой сборкой
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/api'),
      '@components': path.resolve(__dirname, './src/components'),
      '@store': path.resolve(__dirname, './src/store'),
      '@type': path.resolve(__dirname, './src/type'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
