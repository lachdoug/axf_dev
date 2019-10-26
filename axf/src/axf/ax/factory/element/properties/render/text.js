/**
 * Writes an object's text content to its element
 *
 * @since 1.0.0
 *
 * @param {element} element An element with stale content.
 *
 * @return {element} The element with up-to-date content.
 */

ax.factory.element.properties.render.text = function ( element ) {

  // Get content from the element.
  let text = element.$text

  // Resolve content function, if there is one.
  if ( ax.is.function( text ) ) {
    text = text.bind( element )
    if ( element.$properties.hasOwnProperty( '$state' ) ) {
      text = text( element, element.$state )
    }
  }

  // Clear exisitng content
  while (element.childNodes.length ) {
    element.removeChild(element.lastChild);
  }

  // Add new content
  element.appendChild( document.createTextNode( text ) )

  return element

}
