ax.factory.element.properties.query = function( collection, pending=[] ) {

  return new Proxy(
    function () {},
    this.query.proxy.shim( collection, pending )
  )

}
