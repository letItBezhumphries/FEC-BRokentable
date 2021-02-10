const path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/public/dist");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //to clean out dist folder
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  mode: "development",
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: DIST_DIR,
    index: "index.html",
    writeToDisk: true,
    port: 3005,
    // hot: true,
    open: true,
    openPage: "restaurants/aBQtyRWEjX",
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    watchOptions: {
      poll: true,
      ignored: "/node_modules/",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new Dotenv(),
  ],
};
