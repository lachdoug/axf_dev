/**
 * Tag Generator proxy function.
 * Accepts an HTML fragment and returns a Node or NodeList.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
ax.tag.proxy.function = function( component ) {

  if ( ax.is.string( component) ) {
    let jig = document.createElement('div')
    jig.innerHTML = component
    return jig.childNodes
  } if ( ax.is.object( component) ) {
    return ax.factory.element( component )
  } else {
    console.error( 'Component must be String or Object.' )
  }

}
