ax.factory.element.properties.query.$$ = function( selector ) {

  selector = selector.replace( /\|([\w\-]+)/g, '[data-axf="$1"]' )

  return ax.factory.element.properties.query(
    Array.from( this.querySelectorAll( selector ) )
  )

}
