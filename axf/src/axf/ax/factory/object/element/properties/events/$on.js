ax.factory.object.element.properties.events.$on = function ( element ) {

  if ( element.$object.hasOwnProperty( '$on' ) ) {
    for ( let event in element.$object.$on ) {
      element.addEventListener( event.split(':')[0], element.$object.$on[ event ] )
    }
  }

  return element

}
