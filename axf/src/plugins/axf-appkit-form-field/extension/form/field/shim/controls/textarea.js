ax.extension.form.field.shim.controls.
textarea = ( f, options={} ) => {

  let a = ax.a
  let x = ax.x

  let textareaOptions = {
    ...options,
    ...options.textarea
  }

  let controlTagOptions = {

    $value: function() {
      return this.$('textarea').value
    },

    $focus: function () {
      this.$('textarea').focus()
    },

    $disable: function() {
      this.$('textarea').setAttribute( 'disabled', 'disabled' )
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.$('textarea').removeAttribute('disabled')
      }
    },

    ...options.controlTag,

    $on: {
      'input: send control change event': (e,el) => {
        el.$send( 'axf.appkit.form.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

  }

  return a['|appkit-form-control'](
    f.textarea( textareaOptions ),
    controlTagOptions
  )

}
