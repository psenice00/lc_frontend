const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "./bundle.js",
  },
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './',
    hot: true

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
