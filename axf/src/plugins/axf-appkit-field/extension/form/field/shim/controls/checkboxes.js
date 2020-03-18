ax.extension.form.field.shim.controls.
checkboxes = function( f, options ) {

  let a = ax.a

  let checkboxesOptions = {
    ...options,
    ...options.checkboxes
  }

  let controlTagOptions = {

    name: options.name,

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
      if ( !checkboxesOptions.disabled ) {
        for ( let input of this.$inputs() ) {
          if ( !input.$properties.disabled ) {
            input.removeAttribute( 'disabled' )
          }
        }
      }
    },

    ...options.controlTag,

    $on: {
      'click: do nothing when readonly': (e) => { if ( checkboxesOptions.readonly ) e.preventDefault() },
      'change: send control change event': (e,el) => {
        el.$send( 'axf.appkit.form.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

  }

  return a['|appkit-form-control'](
    a['|appkit-form-control-checkboxes'](
      f.checkboxes( checkboxesOptions ),
      options.checkboxesTag
    ),
    controlTagOptions
  )

}
