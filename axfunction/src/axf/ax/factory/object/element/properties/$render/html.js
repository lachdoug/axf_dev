ax.factory.object.element.properties.$render.html = function ( element ) {

  let html = element.$html
  if ( typeof html === "function" ) {
    html = html.call( element, element.$state )
  }

  element.innerHTML = html

  return element

}
