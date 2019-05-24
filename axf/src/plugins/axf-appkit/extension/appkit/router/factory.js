ax.extension.appkit.router.factory = function( options ) {

  return new Proxy(
    ax.extension.appkit.router.proxy.object( options ),
    ax.extension.appkit.router.proxy.shim
  )

}
