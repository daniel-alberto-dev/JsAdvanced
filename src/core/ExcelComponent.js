import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }
  toHTML() {
    return '<h1>Ecxel component</h1>'
  }
  init() {
    this.initDOMListener()
  }
  destroy() {
    this.removeDOMListener()
  }
}