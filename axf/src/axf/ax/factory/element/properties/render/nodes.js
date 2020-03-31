/**
* Adds nodes to element.
*
* @since 1.0.0
*
* @param {element} element
*
* @return {element} The element with content.
*/

ax.factory.element.properties.render.
nodes = function ( element ) {

  // Get content from the element.
  let nodes = element.$nodes

  if ( ax.is.function( nodes ) ) {
    nodes = nodes.bind( element )
    if ( element.$properties.hasOwnProperty( '$state' ) ) {
      nodes = nodes( element, element.$state )
    }
  }

  // Clear existing content
  while ( element.firstChild ) {
    element.firstChild.remove()
  }

  // Add content
  if ( ax.is.array( nodes ) ) {
    nodes.forEach( function( node ) {
      node = ax.factory( node )
      if ( node != null ) element.appendChild( node )
    } )
  } else {
    let node = ax.factory( nodes )
    if ( node != null ) element.appendChild( node )
  }

  return element

}
