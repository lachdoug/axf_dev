ax.extension.appkit.lib.element.visible = function ( element ) {


  // console.log( element )
  // console.log( element.offsetWidth )
  // if ( element.offsetHeight ) debugger
  // console.log( element.getClientRects().length )
// let ref = document.querySelector("input[name='member[first_name]']")
// if ( ref == element ) debugger

  return !!(
    element.offsetWidth ||
    element.offsetHeight ||
    element.getClientRects().length
  )
}
