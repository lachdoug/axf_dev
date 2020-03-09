ax.factory.element.properties.query.$$ = function( selector ) {

  selector = selector.replace( /\|([\w\-]+)/g, '[data-axf-component="$1"]' )

  let collection = Array.from( this.querySelectorAll( selector ) )

  return ax.factory.element.properties.query( collection )

}
