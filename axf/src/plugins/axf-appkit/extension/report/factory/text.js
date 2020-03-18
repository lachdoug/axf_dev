ax.extension.report.factory.
text = function( options={} ) {

  let a = ax.a

  let component

  if ( options.value ) {
    component = options.value
  } else {
    component = a.span( options.placeholder || 'None', { class: 'placeholder' } )
  }

  return a['|appkit-report-text']( component, options.textTag )

}
