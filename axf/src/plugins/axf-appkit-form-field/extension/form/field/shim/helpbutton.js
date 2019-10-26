ax.extension.form.field.shim.
helpbutton = function( options={} ) {

  let a = ax.a
  let x = ax.x

  return a['|appkit-form-field-helpbutton']( {
    $state: false,
    $nodes: function() {
      return a['|appkit-form-field-helpbutton-text'](
        { $text: this.$state ? ' ❓ ✖ ' : ' ❓ ' }
      )
    },
    ...options.helpbuttonTag,
    $on: {
      'click: toggle help': function() {
        this.$state = !this.$state
        this.$('^|appkit-form-field', '|appkit-form-field-help').$toggle()
      },
      ...( options.helpbuttonTag || [] ).$on,
    },
    style: {
      cursor: 'help',
      ...( options.helpbuttonTag || {} ).style,
    }
  } )

}
