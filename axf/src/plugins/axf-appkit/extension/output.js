ax.extension.output = function( value, options={} ) {

  let a = ax.a
  let x = ax.x

  // let functions = options.functions || false

  let component

  if ( value ) {
    if ( options.parse ) {
      if( ax.is.string( value ) ) {
        try {
          component = x.output.element( JSON.parse( value ) )
        }
        catch (error) {
          component = a['.error']( `⚠ ${ error.message }` )
        }
      } else {
        component = a['.error']( `⚠ Not a string.` )
      }
    } else {
      component = x.output.element( value )
    }
  } else {
    component = a.span( options.placeholder || 'None', { class: 'placeholder' } )
  }


  return a['|appkit-output'](
    component,
    options.outputTag
  )

}
