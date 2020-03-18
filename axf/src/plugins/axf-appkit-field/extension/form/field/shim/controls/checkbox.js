ax.extension.form.field.shim.controls.
checkbox = function( f, options ) {

  let a = ax.a

  let checkboxOptions = {
    ...options,
    label: '', // Label for checkbox needs to be specified in options.checkbox
    ...options.checkbox
  }

  // let hiddenInputOptions = {
  //   type: 'hidden',
  //   name: options.name,
  //   value: options.unchecked,
  // }

  let controlTagOptions = {

    $init: function () { this.$valid() },

    $value: function() {
      if ( this.$('input').checked ) {
        return this.$('input').value()
      // } else {
      //   return checkboxOptions.unchecked
      }
    },

    $focus: function () {
      this.$('input').focus()
    },

    $disable: function() {
      let inputs = this.$$('input').$$
      for ( let input of inputs ) {
        input.setAttribute( 'disabled', 'disabled' )
      }
    },

    $enable: function() {
      if ( !checkboxOptions.disabled ) {
        let inputs = this.$$('input').$$
        for ( let input of inputs ) {
          input.removeAttribute('disabled')
        }
        // this.$processUnchecked()
      }
    },

    // $processUnchecked: function() {
    //   if ( this.$('input[type=checkbox]').checked ) {
    //     this.$('input[type=hidden]').setAttribute( 'disabled', 'disabled' )
    //   } else {
    //     this.$('input[type=hidden]').removeAttribute('disabled')
    //   }
    // },

    $validity: function() {
      return this.$('input').validity
    },

    $valid: function() {
      this.$('input').setCustomValidity('')
      if( this.$validity().valid ) {
        // this.$processUnchecked()
        return true
      } else {
        if ( checkboxOptions.invalid ) {
          if ( ax.is.function( checkboxOptions.invalid ) ) {
            let invalidMessage = checkboxOptions.invalid( this.$value, this.$validity() )
            if ( invalidMessage ) {
              this.$('input').setCustomValidity( invalidMessage )
            }
          } else {
            this.$('input').setCustomValidity( checkboxOptions.invalid )
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

  return a['|appkit-form-control']( [
    // f.input( hiddenInputOptions ),
    f.checkbox( checkboxOptions ),
  ], controlTagOptions )

}
