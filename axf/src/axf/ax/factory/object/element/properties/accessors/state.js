ax.factory.object.element.properties.accessors.state = function ( element ) {

  let accessors = this

  Object.defineProperty( element, "$state", {
    get : function () {
      return accessors.state.query( element )
    },
    set : function( state ) {
      accessors.state.set( element, state )
    }
  } )

  return element

}
