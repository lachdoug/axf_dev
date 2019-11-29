ax.extension.report.factory.
json = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let value = options.value || {}
  let component

  try {
    if ( ax.is.string( value ) ) {
      value = JSON.parse( value )
    }
    component = JSON.stringify( value, null, 2  )
  }
  catch (error) {
    component = a['p.error']( `⚠ ${ error.message }` )
  }

  let jsonTagOptions = {
    name: options.name,
    type: options.type,
    $text: component,
    ...options.jsonTag
  }

  return a['pre|appkit-report-json']( jsonTagOptions )

}
