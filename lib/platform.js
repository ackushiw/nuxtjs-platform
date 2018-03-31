import platform from 'browser-platform'

export default class Platform {
  install (Vue, options) {
    Vue.mixin({
      data: () => ({ $platform: null }),
      mounted: () => {
        const bp = platform(window.navigator.userAgent)
        this.$platform = bp
        document.documentElement.setAttribute('class', ['platform'].concat(bp.classNames).join(' '))
      }
    })
  }
}
