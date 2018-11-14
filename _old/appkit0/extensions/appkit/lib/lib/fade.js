ax.extensions.appkit.lib.fade = function(element, options={}) {

  let shown

  if ( element.style.display === 'none' ) {
    shown = false
    element.style.opacity = 0
    element.style.display = "block";
  } else {
    shown = true
    element.style.opacity = 1
  }

  let last = +new Date()
  let time = options.time || 250
  let tick = function() {
    element.style.opacity = +element.style.opacity + ( shown ? -1 : 1 ) * (new Date() - last) / time
    last = +new Date()
    // debugger
// if ( !shown && +element.style.opacity > 0.5 ) debugger
    if ( shown ? +element.style.opacity > 0 : +element.style.opacity < 1 ) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    } else {
      if ( shown ) element.style.display = 'none'
      if ( options.complete ) options.complete()
    }
  }

  tick()

}
