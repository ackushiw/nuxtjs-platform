import platform from 'browser-platform'
import Vue from 'vue'

const mixin = {
  mounted () {
    const bp = platform(window.navigator.userAgent)
    document.documentElement.setAttribute('class', ['platform'].concat(bp.classNames).join(' '))
    this.$root.$platform = bp
  }
}

const Platform = {
  install: function (vue, options) {
    vue.mixin(mixin)
  }
}

Vue.use(Platform.install)

export default Platform
