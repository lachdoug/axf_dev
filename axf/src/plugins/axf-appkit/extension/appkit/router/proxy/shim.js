ax.extension.appkit.router.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( property.match(/^router|locator|scope|params|path|query|anchor|default|transition|toJSON$/) ){
      return target[property]
    } else if ( ax.type.is.function( target[ property ] ) ) {
      return target[ property ]( receiver )
    } else {
      ax.throw( `The appkit router factory does not have property '${ property }'.` )
    }

  }
}
