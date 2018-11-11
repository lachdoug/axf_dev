ax.factory.object.query = function( collection, pending=[] ) {

  return new Proxy(
    function () {},
    ax.factory.object.query.proxy.shim( collection, pending )
  )

}
