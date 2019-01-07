ax.factory.object.element.
append = function ( element, component ) {

  let children = ax.factory( component )
  if ( ax.type.is.array( children ) ) {
    children.forEach( function ( child ) {
      element.appendChild( child )
    } )
  } else {
    element.appendChild( children )
  }

}
