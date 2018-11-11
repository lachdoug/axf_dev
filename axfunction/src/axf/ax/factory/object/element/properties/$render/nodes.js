/**
* Writes an object's nodes content to its element
*
* @since 1.0.0
*
* @param {element} element An element with stale content.
*
* @return {element} The element with up-to-date content.
*/

ax.factory.object.element.properties.$render.nodes = function ( element ) {

  // Get content from the object.
  let nodes = element.$nodes

  if ( typeof nodes === "function" ) {
    nodes = nodes.call( element, element.$state )
  }

  while ( element.firstChild ) {
    element.firstChild.remove()
  }

  nodes.map( function( component ) {
    element.appendChild( ax.factory( component ) )
  } )

  return element

}
