ax.extension.appkit.report.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( typeof target[ property ] === "function" ) {
      return target[ property ]( receiver )
    } else {
      ax.throw( `The appkit report factory does not have method: .${ property }()` )
    }

  }
}
