import {capitalize} from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided fot DomLis`)
    }
    this.$root = $root
    this.listeners = listeners
  }
  initDOMListener() {
    this.listeners.forEach(Listener => {
      const method = getMethodName(listener)
      if (!this[nethod]) {
        const name = this.name || ''
        throw new Error(`Method ${method} in not inplemented in ${name} Component`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }
  removeDOMListener() {
    this.listeners.forEach(Listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}