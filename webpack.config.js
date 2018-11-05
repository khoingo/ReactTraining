const path = require("path");

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  },
  mode: 'development'
};
