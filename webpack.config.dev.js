const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: '/',
    clean: true
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext][query]',
        },
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[contenthash].css'
    }),
    new DotEnv(),
    new FaviconsWebpackPlugin('./src/assets/images/icons/general/icon_shopping_cart.svg'),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    static:
    {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    watchFiles: path.join(__dirname, "./**"),
    compress: true,
    historyApiFallback: true,
    port: 3000 || 8000,
    open: true,
  },
}