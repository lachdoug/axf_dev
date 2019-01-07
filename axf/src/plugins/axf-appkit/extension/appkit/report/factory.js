ax.extension.appkit.report.factory = function( options ) {

  return new Proxy(
    ax.extension.appkit.report.proxy.object( options ),
    ax.extension.appkit.report.proxy.shim
  )

}
