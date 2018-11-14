ax.extension.appkit.report.factory.field.
output = (r) => function( options ) {

  let a = ax.a
  let x = ax.x
  let lib = x.appkit.lib.form.field

  let as = options.as || 'text'
  let name = lib.name.assemble( ...r.$nest, options.name )
  let value = ( r.$data && r.$data[ options.name ] ) || options.value

  return a['appkit-report-field-output']( r[ as ]( {
    name: name,
    value: value,
    type: options.type,
    collection: options.collection,
    stringify: options.stringify,
    ...options[ as ],
  } ) )

}
