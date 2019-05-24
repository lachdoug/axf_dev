ax.factory.object.element.properties.events.$off = function ( element ) {

  element.$off = function ( event ) {
    element.removeEventListener(
      event.split(':')[0],
      element.$object.$on[ event ]
    )
  }

  return element

}
