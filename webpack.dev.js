const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    open: true, // открывает автоматически страницу в браузере при запуске
    hot: true, // при изменениях перезагружает страницу
  },
};

module.exports = merge(devConfig, commonConfig);
