const path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/public/dist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // extracts css files into styles.css in dist
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //to clean out dist folder
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  mode: "production",
  output: {
    filename: "bundle.[contenthash].js",
    path: DIST_DIR,
    publicPath: "",
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
