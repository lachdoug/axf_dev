ax.extension.form.field.shim.controls.
input = function( f, options ) {

  let a = ax.a

  let inputOptions = {
    ...options,
    ...options.input
  }

  let controlTagOptions = {

    $init: function () { this.$valid() },

    $value: function() {
      return this.$('input').value
    },

    $focus: function () {
      this.$('input').focus()
    },

    $disable: function() {
      for ( let input of this.$$('input').$$ ) {
        input.setAttribute( 'disabled', 'disabled' )
      }
    },

    $enable: function() {
      if ( !inputOptions.disabled ) {
        for ( let input of this.$$('input').$$ ) {
          input.removeAttribute('disabled')
        }
      }
    },

    $validity: function() {
      return this.$('input').validity
    },

    $valid: function() {
      this.$('input').setCustomValidity('')
      if( this.$validity().valid ) {
        return true
      } else {
        if ( inputOptions.invalid ) {
          if ( ax.is.function( inputOptions.invalid ) ) {
            let invalidMessage = inputOptions.invalid( this.$value, this.$validity() )
            if ( invalidMessage ) {
              this.$('input').setCustomValidity( invalidMessage )
            }
          } else {
            this.$('input').setCustomValidity( inputOptions.invalid )
          }
        }
        return false
      }
    },

    ...options.controlTag,

    $on: {
      'input: check validity': (e,el) => {
        el.$valid()
      },
      'input: send control change event': (e,el) => {
        el.$send( 'axf.appkit.form.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

  }

  return a['|appkit-form-control'](
    f.input( inputOptions ),
    controlTagOptions
  )

}
