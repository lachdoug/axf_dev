ax.extension.form.field.shim.field.
header = function( f, options={} ) {

  if ( options.type == 'hidden' ) {

    return null

  } else {

    let component

    if ( options.header == true ) {
      options.header = null
    }

    if ( options.header ) {
      component = header
    } else {
      let caption = f.label( options )
      if ( options.help ) {
        component = [ caption, f.helpbutton( options ) ]
      } else {
        component = caption
      }
    }

    return ax.a['|appkit-form-field-header'](
      component,
      {
        ...options.headerTag
      }
    )

  }



}
