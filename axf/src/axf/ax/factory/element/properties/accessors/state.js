ax.factory.element.properties.accessors.state = function ( element ) {

  let accessors = this

  Object.defineProperty( element, '$state', {
    get: () => element.$properties.$state,
    set: ( state ) => accessors.state.set( element, state )
  } )

  return element

}
