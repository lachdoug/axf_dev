ax.factory.object.element.properties.accessors.on.
query = function ( element ) {

  let on = this

  return function() {

    if ( arguments.length === 1 ) {
      return on.set( element, arguments[0] )
    } else if ( arguments.length ) {
      return on.set( element, arguments.join() )
    } else {
      return element.$object.$on
    }
  }
}
