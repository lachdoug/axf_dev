/**
* Adds HTML to element.
*
* @since 1.0.0
*
* @param {element} element
*
* @return {element} The element with content.
*/

ax.factory.element.properties.render.html = function ( element ) {

  let html = element.$html

  if ( ax.is.function( html ) ) {
    html = html.bind( element )
    if ( element.$properties.hasOwnProperty( '$state' ) ) {
      html = html( element, element.$state )
    }
  }

  element.innerHTML = html

  return element

}
