ax.extension.appkit.report.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( fixregex && property.match(/^scope|data|toJSON$/) ){
      return target[property]
    } else if ( ax.type.is.function( target[ property ] ) ) {
      return target[ property ]( receiver )
    } else {
      ax.throw( `The appkit report factory does not have property '${ property }'` )
    }

  }
}
