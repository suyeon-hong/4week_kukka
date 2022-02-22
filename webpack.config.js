const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    extensions: ['.js'], // 생략할 확장자
    alias: {
      // 경로 별칭
      '@': path.resolve(__dirname, 'src'),
    },
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!axios)/, // 제외할 대상 복수 등록
        use: 'babel-loader',
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '.',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: __dirname + '/src/public/',
          to: '.',
          noErrorOnMissing: true,
        }, // 정적 파일 저장할 폴더
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
