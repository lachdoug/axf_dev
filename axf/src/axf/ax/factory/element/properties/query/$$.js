ax.factory.element.properties.query.$$ = function( selector ) {

  selector = selector.replace( /\|([\w\-]+)/g, '[data-axf-component="$1"]' )

  return ax.factory.element.properties.query(
    Array.from( this.querySelectorAll( selector ) )
  )

}
