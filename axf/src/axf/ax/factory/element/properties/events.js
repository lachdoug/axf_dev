ax.factory.element.properties.events = function ( element ) {

  element.$events = element.$properties.$on || {}

  for ( let handler in element.$events ) {
    element.addEventListener(
      handler.split(':')[0],
      function(e) {
        element.$events[ handler ] &&
        element.$events[ handler ].
        call( this, e, element, element.$state )
      }
    )
  }

  return element

}
