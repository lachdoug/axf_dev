ax.factory.object.query.proxy.shim = function( collection, pending ) {

  return {
    get: ax.factory.object.query.proxy.shim.get( collection, pending ),
    set: ax.factory.object.query.proxy.shim.set( collection, pending ),
    apply: ax.factory.object.query.proxy.shim.apply( collection, pending ),
  }

}
