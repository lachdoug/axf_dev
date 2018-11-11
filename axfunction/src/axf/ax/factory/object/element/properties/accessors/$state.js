ax.factory.object.element.properties.accessors.$state = function ( element ) {

  Object.defineProperty( element, "$state", {
    get : function () {
      return element.$object.$state
    },
    set : function( state ) {
      element.$object.$state = state
      if ( element.$object.$update ) {
        element.$object.$update.
          bind( element ).call( element.$object.$state ) &&
        element.$render()
      } else {
        element.$render()
      }
    }
  } )

  return element

}
