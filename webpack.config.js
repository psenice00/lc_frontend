// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const Dotenv = require('dotenv-webpack');

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: __dirname + "/dist",
//     filename: "./bundle.js",
//   },
//   mode: 'development',
//   devServer: {
//     port: 3000,
//     historyApiFallback: true,
//     contentBase: './',
//     hot: true

//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules)/,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         loader: "file-loader",
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html",
//     }),
//     new Dotenv()
//   ],
// };

// const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].[contenthash].js',
//     	publicPath: "/",
//     },
//     module: {
//         rules: [
//             {
//               test: /\.(js|jsx)$/,
//               exclude: /(node_modules)/,
//               loader: "babel-loader",
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.(png|jpe?g|gif)$/i,
//                 loader: 'file-loader'
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: __dirname + '/src/index.html',
//             filename: 'index.html',
//             inject: 'body'
//         }),
//     ]
// };

var webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    	publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.config().parsed),
          }),
    ]
};
