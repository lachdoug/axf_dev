ax.factory.object.element.properties.events.$on = function ( element ) {

  if ( element.$object.hasOwnProperty( '$on' ) ) {
    for ( let event in element.$object.$on ) {
      element.addEventListener(
        event.split(':')[0],
        function(e) {
          element.$object.$on[ event ] &&
          element.$object.$on[ event ].
            call( this, e, element, element.$state() )
        }
      )
    }
  }

  return element

}
