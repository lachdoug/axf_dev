ax.factory.element.properties.accessors.text = function ( element ) {

  let accessors = this

  Object.defineProperty( element, '$text', {
    get : function () {
      // return accessors.text.query( element )
      return element.$properties.$text
    },
    set : function( text ) {
      accessors.text.set( element, text )
    }
  } )

  return element

}
