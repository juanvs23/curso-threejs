const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//rules
const babelConfig = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};
const scss = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ],
};
const extractCssUse = {
  test: /.css$/,

  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader",
    publicPath: "/dist",
  }),
};
//plugins
const extractCssPlugin = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: false,
  allChunks: true,
});

//export
module.exports = {
  module: {
    rules: [babelConfig, scss],
  },

  watchOptions: {
    ignored: ["node_modules"],
  },
  entry: "./src/js/index.js",
  output: {
    filename: "assets/js/index.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    //compress: true,
    port: 8080,

    watchContentBase: true,
    open: true,
  },
  //plugins: [new ExtractTextPlugin("style.css")],
};
