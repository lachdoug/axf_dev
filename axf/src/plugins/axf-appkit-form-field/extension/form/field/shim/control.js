ax.extension.form.field.shim.
control = function( f, options={} ) {

  let a = ax.a
  let x = ax.x

  let key = options.key || ''

  let as = ( options.as || '' ).split( '/' )
  let control = as[0] || options.control || 'input'
  let type = as[1] || options.type

  let name = f.scope ?
    `${ f.scope }[${ key }]` :
    key

  let object = f.object || {}
  let value = ax.is.not.undefined( object[key] ) ?
    object[key] :
    options.value

  let controlFn = f.controls[control]
  // if ( !controlFn ) debugger
  if ( !controlFn ) ax.throw( `Form field factory does not support control type '${ control }'.` )

  let controlOptions = {
    ...options,
    name: name,
    value: value,
    type: type,
    ...options[control]
  }

  return controlFn( controlOptions )

}
