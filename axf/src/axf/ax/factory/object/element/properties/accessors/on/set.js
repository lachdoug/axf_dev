ax.factory.object.element.properties.accessors.on.
set = function ( element, on ) {

  for ( let event in on ) {
    element.$off( event )
    element.$object.$on[ event ] = on[ event ]
    element.addEventListener(
      event.split(':')[0],
      element.$object.$on[ event ]
    )
  }
  
  return element

}
