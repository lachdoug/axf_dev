ax.extension.appkit.form.factory.field.
input = (f) => function( options ) {

  let a = ax.a
  let x = ax.x
  let lib = x.appkit.lib.form.field

  let as = options.as || 'input'
  let name = lib.name.assemble( ...f.$nest, options.name )
  let value = ( f.$data && f.$data[ options.name ] ) || options.value

  return a['appkit-form-field-input']( f[ as ]( {
    name: name,
    value: value,
    type: options.type,
    collection: options.collection,
    ...options[ as ],
  } ) )

}
