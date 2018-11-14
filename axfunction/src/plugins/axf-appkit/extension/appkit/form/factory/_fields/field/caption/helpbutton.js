ax.extension.appkit.form.factory.field.caption.
helpbutton = function( options ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-form-field-helpbutton']( {
    $state: false,
    $nodes: function() {
      return a["appkit-form-field-arrow"](
        { $text: this.$state ? " ? ▴ " : " ? ▾ " }
      )
    },
    $on: { 'click: toggle help': function() {
      this.$state = !this.$state
      this.$('^appkit-form-field', 'appkit-form-field-help').$toggle()
    } },
    ...options.helpbuttonTag
  } )

}
