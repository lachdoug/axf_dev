ax.factory.object.element.properties.accessors.on = function ( element ) {

  let accessors = this

  Object.defineProperty( element, "$on", {
    get : function () {
      return accessors.on.query( element )
    },
    set : function( on ) {
      accessors.nodes.set( element, on )
    }
  } )

  return element

}
