ax.factory.object.element.properties.accessors.html.
query = function ( element ) {

  let html = this

  return function() {

    if ( arguments.length === 1 ) {
      return html.set( element, arguments[0] )
    } else if ( arguments.length ) {
      return html.set( element, arguments.join() )
    } else {
      return element.$object.$html
    }
  }
}
