ax.extension.form.field.shim.controls.
checks = function( f, options ) {

  let a = ax.a

  let checksOptions = {
    ...options,
    name: options.name + '[]',
    ...options.checks
  }

  let controlTagOptions = {

    $value: function() {
      return this.$$('input:checked').value.$$
    },

    $focus: function () {
      this.$('input').focus()
    },

    $controls: function() {
      return this.$$( '|appkit-form-control' ).$$
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
      if ( !checksOptions.disabled ) {
        for ( let input of this.$inputs() ) {
          if ( !input.$properties.disabled ) {
            input.removeAttribute( 'disabled' )
          }
        }
      }
    },

    ...options.controlTag,

    $on: {
      'click: do nothing when readonly': (e) => { if ( checksOptions.readonly ) e.preventDefault() },
      'change: send control change event': (e,el) => {
        el.$send( 'axf.appkit.form.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

  }

  return a['|appkit-form-control'](
    a['|appkit-form-control-collection'](
      f.checks( checksOptions ),
      { name: options.name } // Used to find control content using name without []
    ),
    controlTagOptions
  )

}
