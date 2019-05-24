ax.extension.appkit.form.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( property.match(/^scope|data|layout|toJSON$/) ){
      return target[property]
    } else if ( ax.type.is.function( target[ property ] ) ) {
      return target[ property ]( receiver )
    } else {
      ax.throw( `The appkit form factory does not have property '${ property }'.` )
    }

  }
}
