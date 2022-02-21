const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js'], // 생략할 확장자
    alias: {
      // 경로 별칭
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
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
          // 먼저 해석이 필요한 로더를 나중에 작성
          'css-loader', // css loader 해줌
          'postcss-loader', // css 후처리로 프리픽서 붙여주고
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
        { from: 'public' }, // 정적 파일 저장할 폴더
      ],
    }),
  ],
  devServer: {
    // port: 3000,
    historyApiFallback: true,
  },
};
