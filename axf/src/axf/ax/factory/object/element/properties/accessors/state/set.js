ax.factory.object.element.properties.accessors.state.
set = function ( element, state ) {

  if ( element.$object.$state === state ) return

  element.$object.$state = state

  if ( element.$object.$update ) {
    element.$object.$update.
      call( element, element, element.$object.$state ) &&
    element.$render()
  } else {
    element.$render()
  }

  return element

}
