ax.extension.appkit.report.factory.field.
dependent.match = function( options ) {

  if ( this.$dependable() ) {

    let dependency = this.$dependency()

    if ( dependency.$match() ) {

      let value = dependency.$value()

      if ( ax.type.is.array( value ) ) {
        value = value.join(' ')
      }

      if ( options.value ) {
        return value == options.value
      } else if ( options.pattern ) {
        return new RegExp( options.pattern || "" ).
          test( value )
      } else {
        return !!value
      }

    } else {
      return false
    }

  } else {
    return true
  }

}
