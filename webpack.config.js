const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  /* mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: 'https://microapp-trkcll-assesment.netlify.app/',
  }, */
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.(css|less)$/,
      use: ["style-loader", "css-loader"]
    }
    ]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "MicroFrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./DetailModal": "./src/components/DetailModal"
      },
      shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } },
    })
  ]
};