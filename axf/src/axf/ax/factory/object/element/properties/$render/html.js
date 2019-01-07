ax.factory.object.element.properties.$render.html = function ( element ) {
// debugger
  let html = element.$html
  if ( ax.type.is.function( html ) ) {
    html = html.call( element, element, element.$state )
  }
// debugger
  element.innerHTML = html

  return element

}
