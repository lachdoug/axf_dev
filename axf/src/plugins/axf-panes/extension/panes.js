ax.extension.panes = function ( options={} ) {

  let a = ax.a

  let proximate = options.proximate || null
  let adjacent = options.adjacent || null
  let orientation = options.vertical ? 'vertical' : 'horizontal'

  function move(e) {

    let el = e.target.$('^axf-panes')

    let percent,
        vertical = options.vertical

    if ( vertical ) {
      let position = el.clientHeight - ( e.clientY - el.offsetTop )
      percent = 100 * position / el.clientHeight
    } else {
      let position = el.clientWidth - ( e.clientX - el.offsetLeft )
      percent = 100 * ( 1 - position / el.clientWidth )
    }

    resize( el, percent, vertical )

  }

  function resize( el, percent, vertical ) {

    let proximateEl = el.$('axf-panes-proximate'),
          adjacentEl = el.$('axf-panes-adjacent'),
          drag = el.$('axf-panes-drag')

    percent = Number( percent || 50 )
    if ( Number.isNaN( percent ) ) percent = 50
    if ( percent > 90 ) percent = 90
    if ( percent < 10 ) percent = 10

    if ( vertical ) {
      proximateEl.style.bottom = `calc( ${ 100 - percent }% + 2px )`
      adjacentEl.style.top = `calc( ${ percent }% + 2px )`
      drag.style.top = `calc( ${ percent }% - 2px )`
    } else {
      proximateEl.style.right = `calc( ${ 100 - percent }% + 2px )`
      adjacentEl.style.left = `calc( ${ percent }% + 2px )`
      drag.style.left = `calc( ${ percent }% - 2px )`
    }

    // el.$send( 'resize' )
    el.$send( 'axf.panes.resize', { detail: { percent: percent } } )
  }

  function clear(e) {
    e.target.$('^axf-panes').classList.remove( 'dragable' )
    document.removeEventListener( 'mousemove', move )
    document.removeEventListener( 'mouseup', clear )
  }

  return a['axf-panes']( [
    a['axf-panes-proximate']( proximate ),
    a['axf-panes-drag']( { $on: {
      'mousedown': (e,el) => {
        el.$('^axf-panes').classList.add( 'dragable' )
        document.addEventListener( 'mousemove', move )
        document.addEventListener( 'mouseup', clear )
      },
    } } ),
    a['axf-panes-adjacent']( adjacent ),
  ], {
    class: orientation,
    $init: function() {
      resize( this, options.percent, options.vertical )
    },
    ...options.panesTag
  } )

}
