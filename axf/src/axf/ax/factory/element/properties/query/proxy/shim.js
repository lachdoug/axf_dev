ax.factory.element.properties.query.proxy.shim = function( collection, pending ) {

  return {
    get: ax.factory.element.properties.query.proxy.shim.get( collection, pending ),
    set: ax.factory.element.properties.query.proxy.shim.set( collection, pending ),
    apply: ax.factory.element.properties.query.proxy.shim.apply( collection, pending ),
  }

}
