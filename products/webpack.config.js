const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*", // Enable CORS for all origins
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "myproducts",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/bootstrap",
      },
      // shared: ["faker"],
      shared: {
        "@faker-js/faker": {
          singleton: true,
          eager: false,
          requiredVersion: "^8.0.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    publicPath: "http://localhost:8081/",
  },
};
