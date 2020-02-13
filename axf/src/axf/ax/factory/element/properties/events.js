ax.factory.element.properties.events = function ( element ) {

  element.$events = {}

  for ( let handle in element.$properties.$on ) {
    element.$events[handle] = (e) => element.$properties.$on[handle].call(element, e, element, element.$state)
    element.addEventListener(
      handle.split(':')[0],
      element.$events[handle]
    )
  }

  return element

}
