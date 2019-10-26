ax.factory.element.properties.query.proxy.shim.apply = function( collection, pending ) {

  return function( target, receiver, args ) {

    collection.forEach( function( node, i ) {
      collection[i] = pending[i].call( node, ...args )
    } )

    return ax.factory.element.properties.query( collection )

  }

}
