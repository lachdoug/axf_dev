ax.extension.appkit.report.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( ax.type.is.function( target[ property ] ) ) {
      return target[ property ]( receiver )
    } else {
      ax.throw( `The appkit report factory does not have method: .${ property }()` )
    }

  }
}
