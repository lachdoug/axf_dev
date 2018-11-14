ax.extension.appkit.report.factory.field.
dependent.match = function( options ) {

  if ( options.selector || options.name ) {

    let dependency = this.$dependency()

    if ( dependency.$match() ) {

      let dependencyValue = dependency.$value()

      if ( dependencyValue instanceof Array ) {
        dependencyValue = dependencyValue.join(' ')
      }

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
