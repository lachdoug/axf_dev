ax.extension.form.field.dependent.shim.
dependent.match = function( el, options ) {

  if ( el.$dependable() ) {

    let dependency = el.$dependency()

    if ( dependency.$match() ) {

      let dependencyValue = dependency.$value()

      if ( options.value ) {
        return dependencyValue == options.value
      } else if ( options.pattern ) {
        return new RegExp( options.pattern || '' ).
          test( dependencyValue.toString() )
      } else {
        if ( ax.is.array( dependencyValue ) ) {
          return dependencyValue.length > 0
        } else {
          return !!dependencyValue
        }
      }

    } else {
      return false
    }

  } else {
    return true
  }

}
