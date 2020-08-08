import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  target: 'web',
  entry: './src/renderer/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
} as Configuration
