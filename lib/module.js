const { resolve } = require('path')

module.exports = async function module (moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'browser-platform.js',
    ssr: false
  })
}
// module.exports.meta = require('./package.json')
