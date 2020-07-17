import {$} from '@core/Dom'

export function resizeHandler($root, event) {
  const $resaizer = $(event.target)
  const $parent = $resaizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resaizer.data.resize

  if (type === 'col') {
    $resaizer.css({
      height: '500px'
    })
  } else {
    $resaizer.css({
      width: '1500px'
    })
  }
  
  const cells = $root.findAll(`[data-col="${$parent.data.col}"]`)

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = Math.floor(e.pageX - coords.right)
      const value = coords.width + delta
      $parent.css({width: value + 'px'})
      cells.forEach(el => el.style.width = value + 'px')
    } else {
      const delta = e.pageY - coords.bottom
      const value = coords.height + delta
      $parent.css({height: value + 'px'})
    }
  }
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    if (type === 'col') {
      $resaizer.css({
        opacity: 0,
        height: '100%'
      })
    } else {
      $resaizer.css({
        opacity: 0,
        width: '100%'
      })
    }
  }
} 