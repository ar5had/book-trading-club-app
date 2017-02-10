const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(path.resolve(__dirname, '../src/index.html'))
module.exports = {
  entry: path.resolve(__dirname, '../src/app/main.js'),
  output: { path: path.resolve(__dirname, '../dist'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /(\.js)|(\.jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: [ 'style-loader', 'css-loader' ] },
      {
        test: /(\.sass)|(\.scss)$/,
        loader: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    })
  ]
}
