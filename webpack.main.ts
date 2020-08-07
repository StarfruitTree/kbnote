import { Configuration } from 'webpack'
export default {
  target: 'electron-main',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  }
} as Configuration
