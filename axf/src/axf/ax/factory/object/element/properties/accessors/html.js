ax.factory.object.element.properties.accessors.html = function ( element ) {

  let accessors = this

  Object.defineProperty( element, "$html", {
    get : function () {
      return accessors.html.query( element )
    },
    set : function( html ) {
      accessors.html.set( element, nodes )
    }
  } )

  return element

}
