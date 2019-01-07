ax.factory.object.query.proxy.shim.apply = function( collection, pending ) {

  return function( target, receiver, args ) {
    if ( pending.length ) {
      collection.forEach( function( node, i ) {
        collection[i] = pending[i].call( node, ...args )
      } )
      return ax.factory.object.query( collection )
    } else {
      return collection
    }

  }

}
