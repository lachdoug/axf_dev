ax.extension.lib.animate.fade.in = function( el, options={} ) {

  let step = 25 / ( options.duration || 250 )

  el.style.opacity = el.style.opacity || 0
  el.style.display = options.display || "block"

  let complete = () => {
    el.style.opacity = 1
    if ( options.complete ) options.complete( el )
  }

  let fade = function () {
    if  ( ( el.style.opacity = parseFloat( el.style.opacity ) + step ) >= 1 ) {
      complete()
    } else {
      setTimeout( fade, 25 )
    }
  }

  fade()

}
