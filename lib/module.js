const { resolve } = require('path')

module.exports = async function module (moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: '@nuxtjs/platform.js'
  })
}
