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
      let input
      let inputs = this.$$('input').$$
      for ( input of inputs ) {
        input.setAttribute( 'disabled', 'disabled' )
      }
    },

    $enable: function() {
      if ( !options.disabled ) {
        let input
        let inputs = this.$$('input').$$
        for ( input of inputs ) {
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
        if ( options.invalid ) {
          if ( ax.is.function( options.invalid ) ) {
            let invalidMessage = options.invalid( this.$value, this.$validity )
            if ( invalidMessage ) {
              this.$('input').setCustomValidity( invalidMessage )
            }
          } else {
            this.$('input').setCustomValidity( options.invalid )
          }
        }
        // debugger
        // this.$send( 'axf.appkit.form.control.invalid' )
        return false
      }
    },

    ...options.controlTag,

    $on: {
      'input: send control change event': (e,el) => {
        // let form = el.$('^form')
        // if ( form ) { form.$dependencies() }
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
