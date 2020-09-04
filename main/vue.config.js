const packageName = require('./package.json').name
module.exports = {
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
}