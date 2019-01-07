ax.extension.appkit.form.factory = function( options ) {

  return new Proxy(
    ax.extension.appkit.form.proxy.object( options ),
    ax.extension.appkit.form.proxy.shim
  )

}
