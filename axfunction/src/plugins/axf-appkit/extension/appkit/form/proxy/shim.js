ax.extension.appkit.form.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( typeof target[ property ] === "function" ) {
      return target[ property ]( receiver )
    } else {
      ax.throw( `The appkit form factory does not have method: .${ property }()` )
    }

  }
}
