ax.extension.appkit.document.stylesheet.proxy.shim = {
  get: ( target, property ) => function ( rules, options={} ) {

    return target( rules, { scope: property, ...options } )

  }
}
