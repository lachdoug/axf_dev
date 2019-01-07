ax.extension.appkit.form.factory.field.
caption = function( options={} ) {

  let component

  if ( options.caption ) {
    component = caption
  } else {
    let label = this.caption.label( options )
    if ( options.help ) {
      component = [ label, this.caption.helpbutton( options ) ]
    } else {
      component = label
    }
  }

  return ax.a["appkit-form-field-caption"](
    component,
    {
      ...options.captionTag
    }
  )

}
