ax.factory.object.element.properties.accessors.nodes = function ( element ) {

  let accessors = this

  Object.defineProperty( element, "$nodes", {
    get : function () {
      return accessors.nodes.query( element )
    },
    set : function( nodes ) {
      accessors.nodes.set( element, nodes )
    }
  } )

  return element

}
