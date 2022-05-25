const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'module.js'),
  output: {
    library: 'FormioCustomTemplate',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: 'formio-custom-templates.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader?-url',
          'sass-loader',
        ]
      }
    ]
  },
  mode: 'development',
  performance: { hints: false },
  externals: {
    formiojs: 'Formio'
  }
};
