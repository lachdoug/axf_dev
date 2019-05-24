ax.factory.object.element.properties.accessors.state.
query = function ( element ) {

  let state = this

  return function() {

    if ( arguments.length === 1 ) {
      return state.set( element, arguments[0] )
    } else if ( arguments.length ) {
      return state.set( element, arguments )
    } else {
      return element.$object.$state
    }
  }
}
