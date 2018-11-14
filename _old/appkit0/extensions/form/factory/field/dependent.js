ax.extensions.form.factory.field.dependent = function(
  components,
  options={}
) {

  let a = ax.a
  let x = ax.x

  let dependentTag = Object.assign(
    {
      style: "display: none;",
      $init: function () {
        this.$check()
      },
      onchange: function() {
        let dependents = this.
          closest('form').
          querySelectorAll('field dependent') || []
        dependents.forEach(
          function( dependent ) {
            dependent.$check()
          } )
      },
      $isDependent: function () {
        return ( options.selector || options.name ) &&
                  ( options.value || options.pattern )
      },
      $selector: function() {
        return options.selector || `[name='${options.name}'], [name='${options.name}[]']`
      },
      $dependency: function() {
        return this.closest( 'form' ).$( this.$selector() )[0].closest('control')
      },
      $match: function() {

        if ( this.$isDependent() ) {

          let dependency = this.$dependency()

          if ( dependency.$match() ) {

            let dependencyValue = dependency.$value()
            if ( dependencyValue instanceof Array ) {
              dependencyValue = dependencyValue.join(' ')
            }
            if ( options.value ) {
              return dependencyValue == options.value
            } else {
              return new RegExp( options.pattern || "" ).
                test( dependencyValue )
            }
          } else {
            return false
          }

        } else {
          return true
        }

      },
      $check: function () {
        if ( this.$match() ) {
          ( options.onmatch ? options.onmatch( this ) : true ) &&
          ( () => {
            if ( this.style.display === 'none') {
              x.appkit.lib.fadeIn( this )
              this.$('control')[0].$enable()
            }
          } )()
        } else {
          ( options.onmismatch ? options.onmismatch( this ) : true ) &&
          ( () => {
            x.appkit.lib.fadeOut( this )
            this.$('control')[0].$disable()
          } )()
        }
      }

    },
    options.dependentTag
  )

  return a.dependent( components, dependentTag )

};
