ax.factory.object.element.properties.accessors.$on = function ( element ) {

  Object.defineProperty( element, "$on", {
    get : function () {
      return element.$object.$on
    },
    set : function( events ) {
      for ( let event in events ) {
        element.$off( event )
        element.$object.$on[ event ] = events[ event ]
        element.addEventListener( event.split(':')[0], element.$object.$on[ event ] )
      }
    }
  } )

  return element

}
