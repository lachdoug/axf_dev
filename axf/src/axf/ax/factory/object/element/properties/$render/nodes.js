/**
* Writes an object's nodes content to its element
*
* @since 1.0.0
*
* @param {element} element An element with stale content.
*
* @return {element} The element with up-to-date content.
*/

ax.factory.object.element.properties.$render.
nodes = function ( element ) {
// debugger
  // Get content from the object.
  let nodes = element.$nodes

  if ( ax.type.is.function( nodes ) ) {
    // nodes = nodes.bind( element )
    nodes = nodes.call( element, element, element.$state )
  }
  // Clear existing content
  while ( element.firstChild ) {
    element.firstChild.remove()
  }

  // debugger
  // Add content
  if ( ax.type.is.array( nodes ) ) {
    nodes.forEach( function( node ) {
      // debugger
      element.appendChild( ax.factory( node ) )
    } )
  } else {
    // debugger
    element.appendChild( ax.factory( nodes ) )
  }

  return element

}
