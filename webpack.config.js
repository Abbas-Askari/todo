const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const src = "./src/";
const entry = fs.readdirSync(src).reduce((obj, file) => {
  if (file.endsWith(".js")) obj[file.split(".")[0]] = src + file;
  return obj;
}, {});

// console.log(entry);

module.exports = {
  entry,
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo List",
    }),
  ],
  devtool: "inline-source-map",
  output: {
    clean: true,
    filename: "[name].build.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
