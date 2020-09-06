const Dev = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.less', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.(woff2?|woff|png|eot|ttf|otf|svg)(\?.*)?$/,
        use: 'url-loader',
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          Dev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
          loader: "css-loader",
          options: {
            importLoaders: 2
          }
        }, "postcss-loader", "less-loader"]
      }
    ]
  }
}