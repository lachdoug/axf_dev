ax.factory.element.properties.traverse = function( element, selector ) {

  selector = selector.replace( /\|([\w\-]+)/g, '[data-axf="$1"]' )

  if ( !element ) {
    return null
  } else if ( /^\s*\^/.test( selector ) ) {
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
