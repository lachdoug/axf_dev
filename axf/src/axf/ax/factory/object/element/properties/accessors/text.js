ax.factory.object.element.properties.accessors.text = function ( element ) {

  let accessors = this

  Object.defineProperty( element, "$text", {
    get : function () {
      return accessors.text.query( element )
    },
    set : function( text ) {
      accessors.text.set( element, text )
    }
  } )

  return element

}
