const path = require('path');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true, // очистка public/bundle.js перед каждой сборкой
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    open: true, // открывает автоматически страницу в браузере при запуске
    hot: true, // при изменениях перезагружает страницу
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
