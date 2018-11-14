ax.extension.appkit.form.factory.field.caption.
label = function( options ) {

  let a = ax.a
  let x = ax.x
  let lib = x.appkit.lib

  if ( options.label === false ) return

  let component = [ options.label || lib.text.labelize( options.name ) ]

  let labelTag = {
    $on: { 'click: focus on input': function() {
      this.$( "^appkit-form-field", 'appkit-form-field-input > *').$focus()
    } },
    ...options.labelTag
  }

  return a["appkit-form-field-label"]( component, labelTag )

}
