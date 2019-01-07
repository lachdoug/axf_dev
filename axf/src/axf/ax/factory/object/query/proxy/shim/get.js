ax.factory.object.query.proxy.shim.get = function( collection, pending ) {

  return function( target, property, receiver ) {

    if ( /^\d+$/.test( property ) ) return collection[ property ]
    collection.forEach( function( node, i ) {
      let result = node[ property ]
      if ( ax.type.is.function( result ) ) {
        pending[i] = result
      } else {
        collection[i] = result
      }
    } )

    return ax.factory.object.query( collection, pending )

  }

}
