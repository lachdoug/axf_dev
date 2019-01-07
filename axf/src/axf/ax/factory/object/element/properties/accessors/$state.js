ax.factory.object.element.properties.accessors.$state = function ( element ) {

  Object.defineProperty( element, "$state", {
    get : function () {
      return element.$object.$state
    },
    set : function( state ) {
      element.$object.$state = state
      if ( element.$object.$update ) {
        element.$object.$update.
          call( element, element.$object.$state ) &&
        element.$render()
      } else {
        element.$render()
      }
      return true
    }
  } )

  return element

}
