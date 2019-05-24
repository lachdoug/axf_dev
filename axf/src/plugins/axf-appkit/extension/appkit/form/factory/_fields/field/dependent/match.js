ax.extension.appkit.form.factory.field.
dependent.match = function( options ) {

  if ( this.$dependable() ) {

    let dependency = this.$dependency()

    // if ( !dependency ) debugger

    if ( dependency.$match() ) {

      let dependencyValue = dependency.$value()

      // if ( ax.type.is.array( dependencyValue ) ) {
      //   dependencyValue = dependencyValue.join(' ')
      // }

      if ( options.value ) {
        return dependencyValue == options.value
      } else if ( options.pattern ) {
        return new RegExp( options.pattern || "" ).
          test( dependencyValue )
      } else {
        return !!dependencyValue
      }

    } else {
      return false
    }

  } else {
    return true
  }

}
