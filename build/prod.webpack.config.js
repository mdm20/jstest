const merge = require('webpack-merge');
const baseConfig = require('./base.webpack.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
    devtool: 'eval-source-map',
    
    module: {
      rules: [
        {
            test: /index\.ts$/,
            loader: 'string-replace-loader',
            options: {
            search: 'XXXXXXXX',
            replace: '',
            }
        },
      ]
    },
    output: {
        filename: 'loyaltyexpress.js',
        path: path.resolve(__dirname, 'dist')
      }
  });