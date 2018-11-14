ax.factory.object.traverse = function( element, selector ) {

  if ( /^\s*\^/.test( selector ) ) {
    selector = selector.replace( /^\s*\^\s*/, '' )
    if ( selector ) {
      return element.closest( selector )
    } else {
      return element.parentElement
    }
  } else if ( /^\s*$/.test( selector ) ) {
    return element
  } else {
    return element.querySelector( selector )
  }

}
