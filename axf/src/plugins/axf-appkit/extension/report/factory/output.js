ax.extension.report.factory.
output = function( options={} ) {

  let a = ax.a
  let x = ax.x

  // let value = options.value
  // let component
  //
  // if ( value ) {
  //   if ( options.parse ) {
  //     if( ax.is.string( value ) ) {
  //       try {
  //         component = x.output( JSON.parse( value ) )
  //       }
  //       catch (error) {
  //         component = a['.error']( `⚠ ${ error.message }` )
  //       }
  //     } else {
  //       component = a['.error']( `⚠ Not a string.` )
  //     }
  //   } else {
  //     component = x.output( value )
  //   }
  // } else {
  //   component = a.span( options.placeholder || 'None', { class: 'placeholder' } )
  // }
  //
  let controlTagOptions = {

    'data-name': options.name,
    tabindex: 0,
    $value: function() {
      return options.value
    },
    $focus: function () {
      this.focus()
    },

    ...options.controlTag,

  }

  return a['|appkit-report-control'](
    x.output( options.value, {
      parse: options.parse,
      outputTag: options.outputTag,
    } ),
    // a['|appkit-report-output'](
    //   component,
    //   options.outputTag
    // ),
    controlTagOptions
  )

}
