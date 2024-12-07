const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        //products is connected with bootstrap "products"
        products: "myproducts@http://localhost:8081/remoteEntry.js",
        // cart: "cart@http://localhost:8082/remoteEntry.js",
        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
