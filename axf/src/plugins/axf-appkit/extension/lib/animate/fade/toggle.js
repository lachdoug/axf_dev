ax.extension.lib.animate.fade.toggle = function(element, options={}) {

  let shown

  if ( element.style.display === 'none' ) {
    shown = false
    element.style.opacity = 0
    element.style.display = null;
  } else {
    shown = true
    element.style.opacity = 1
  }

  let last = +new Date()
  let time = options.time || 250
  let step = function() {
    let opacity = + element.style.opacity + ( shown ? -1 : 1 ) * (new Date() - last) / time
    if ( opacity > 1 ) opacity = 1
    element.style.opacity = opacity
    last = +new Date()
    if ( shown ? opacity > 0 : opacity < 1 ) {
      (window.requestAnimationFrame && requestAnimationFrame(step)) || setTimeout(step, 16)
    } else {
      if ( shown ) element.style.display = 'none'
      if ( options.complete ) options.complete(element)
    }
  }

  step()

}
