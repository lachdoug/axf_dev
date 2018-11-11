ax.factory.object.query.proxy.shim.set =
function( collection, pending ) {

  return function( target, property, value, receiver ) {

    collection.forEach( function( node ) {
      node[ property ] = value
    } )

  }

}
