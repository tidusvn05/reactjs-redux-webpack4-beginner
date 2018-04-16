const webpack = require('webpack'),
      path = require('path'),
      htmlWebpackPlugin = require('html-webpack-plugin')
      
const config = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.jsx')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader?cacheDirectory', 
        exclude: [/node_modules/]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/, 
        use: [
          {loader: 'style-loader'}, 
          {loader: 'css-loader'}, 
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html'), filename: './index.html'})
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 8081,
    // for react-router-dom
    historyApiFallback: true,
  },
  node: {
    net: 'empty'
  }
}

module.exports = config