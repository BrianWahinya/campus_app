const webpack = require('webpack');

module.exports = {
  // ...other webpack config options...
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};