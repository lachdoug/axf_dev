ax.factory.element.properties.accessors.off = function ( element ) {

  element.$off = function ( event ) {
    
    element.removeEventListener(
      event.split(':')[0],
      element.$events[ event ]
    )
  }

  return element

}
