ax.extension.appkit.form.factory.field.
caption = function( options={} ) {

  if (
    options.caption === false ||
    (
      ax.type.is.undefined( options.caption ) &&
      options.type === "hidden"
    )
  ) {

    return null

  } else {

    let component

    if ( options.caption === true ) {
      options.caption = null
    }

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



}
