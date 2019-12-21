const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackPwaManifest({
      name: "React memo",
      short_name: "memo",
      description: "react memo app",
      background_color: "#ffffff",
      crossorigin: 'use-credentials',
      theme_color: '#eeeeee',
      icons: [{
        src: path.resolve('src/assets/Icon.png'),
        sizes: [96, 128, 192, 256, 384, 512]
      }]
    })
  ]
};
