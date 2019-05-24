ax.extension.appkit.report.factory.field.
output = (r) => function( options ) {

  let a = ax.a
  let x = ax.x

  let as = options.as || 'text'
  let value = (
    r.data &&
    (
      r.data[ options.key ] ||
      ( r.data[ options.key ] === 0 ? "0" : null )
    )
   ) || options.value

  return a['appkit-report-field-output']( r[ as ]( {
    name: options.name,
    value: value,
    type: options.type,
    collection: options.collection,
    stringify: options.stringify,
    ...options[ as ],
  } ) )

}
