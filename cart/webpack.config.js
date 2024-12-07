const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
    headers: {
      "Access-Control-Allow-Origin": "*", // Enable CORS for all origins
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShowIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    publicPath: "http://localhost:8082/", // Important for loading assets correctly
  },
};
