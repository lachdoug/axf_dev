ax.extension.form.field.shim.
control = function( f, options={} ) {

  let a = ax.a
  let x = ax.x

  let as = ( options.as || '' ).split( '/' )
  let control = as[0] || options.control || 'input'
  let type = as[1] || options.type

  let controlFn = f.controls[control]
  // if ( !controlFn ) debugger
  if ( !controlFn ) ax.throw( `Form field factory does not support control type '${ control }'.` )

  let key = options.key || ''

  options.name = options.name || ( f.scope ?
    `${ f.scope }[${ key }]` :
    key )

  let object = f.object || {}
  if ( ax.is.not.undefined( object[key] ) ) {
    options.value = object[key]
  }

  let controlOptions = {
    ...options,
    type: type,
    ...options[control]
  }

  return controlFn( controlOptions )

}
