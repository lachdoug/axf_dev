ax.extension.report.factory.
string = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let value = options.value || ''

  let component

  if ( options.value ) {
    component = options.value.toString()
  } else {
    component = a.span( options.placeholder || 'None', { class: 'placeholder' } )
  }

  return a['|appkit-report-string']( component, options.stringTag )

}
