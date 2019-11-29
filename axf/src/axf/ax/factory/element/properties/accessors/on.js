ax.factory.element.properties.accessors.on = function ( element ) {

  element.$on = function( handlers ) {
    for ( let handler in handlers ) {
      element.$off( handler )
      element.$events[ handler ] = handlers[ handler ]
      element.addEventListener(
        handler.split(':')[0],
        function(e) {
          element.$events[handler] &&
          element.$events[handler].
          call( this, e, element, element.$state )
        }
      )
    }
  }

  return element

}
