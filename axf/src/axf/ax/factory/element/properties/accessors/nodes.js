ax.factory.element.properties.accessors.nodes = function ( element ) {

  let accessors = this

  Object.defineProperty( element, '$nodes', {
    get : function () {
      // return accessors.nodes.query( element )
      return element.$properties.$nodes
    },
    set : function( nodes ) {
      accessors.nodes.set( element, nodes )
    }
  } )

  return element

}
