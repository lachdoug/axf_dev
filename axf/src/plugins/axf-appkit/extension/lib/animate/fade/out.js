ax.extension.lib.animate.fade.out = function( el, options={} ) {

  let step = 25 / ( options.duration || 250 )
  el.style.opacity = el.style.opacity || 1

  let complete = () => {
    el.style.display = "none"
    el.style.opacity = 0
    if ( options.complete ) options.complete( el )
  }

  let fade = function () {
    if ( ( el.style.opacity -= step ) <= 0 ) {
      complete()
    } else {
      setTimeout( fade, 25 )
    }
  }

  fade()

}
