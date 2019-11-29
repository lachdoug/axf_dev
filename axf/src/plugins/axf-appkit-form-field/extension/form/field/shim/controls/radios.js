ax.extension.form.field.shim.controls.
radios = function( f, options ) {

  let a = ax.a

  let radiosOptions = {
    ...options,
    ...options.radios
  }

  let controlTagOptions = {

    $init: function () { this.$valid() },

    $value: function() {
      return this.$('input:checked').value
    },

    $focus: function () {
      this.$('input').focus()
    },

    $inputs: function() {
      return this.$$( 'input' ).$$
    },

    $disable: function() {
      for ( let input of this.$inputs() ) {
        input.setAttribute( 'disabled', 'disabled' )
      }
    },

    $enable: function() {
      if ( !radiosOptions.disabled ) {
        for ( let input of this.$inputs() ) {
          if ( !input.$properties.disabled ) {
            input.removeAttribute( 'disabled' )
          }
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
        if ( radiosOptions.invalid ) {
          if ( ax.is.function( radiosOptions.invalid ) ) {
            let invalidMessage = radiosOptions.invalid( this.$value, this.$validity() )
            if ( invalidMessage ) {
              this.$('input').setCustomValidity( invalidMessage )
            }
          } else {
            this.$('input').setCustomValidity( radiosOptions.invalid )
          }
        }
        return false
      }
    },


    ...options.controlTag,

    $on: {
      'click: do nothing when readonly': (e) => { if ( radiosOptions.readonly ) e.preventDefault() },
      'input: check validity': (e,el) => {
        el.$valid()
      },
      'change: send control change event': (e,el) => {
        el.$send( 'axf.appkit.form.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

  }

  return a['|appkit-form-control'](
    f.radios( radiosOptions ),
    controlTagOptions
  )

}
