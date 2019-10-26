ax.factory.element.properties.accessors.state.
set = function ( element, state ) {

  if ( element.$properties.$state === state ) return

  element.$properties.$state = state

  if ( element.$properties.$update ) {
    element.$properties.$update.
      call( element, element, state ) &&
    element.$render()
  } else {
    element.$render()
  }

  return element

}
