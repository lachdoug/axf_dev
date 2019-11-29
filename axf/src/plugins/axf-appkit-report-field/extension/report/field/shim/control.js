ax.extension.report.field.shim.
control = function( r, options={} ) {

  let a = ax.a
  let x = ax.x

  let key = options.key || ''

  let name = r.scope ?
    `${ r.scope }[${ key }]` :
    key

  let object = r.object || {}
  let value = ax.is.not.undefined( object[key] ) ?
    object[key] :
    options.value

  let as = ( options.as || '' ).split( '/' )
  let control = as[0] || 'output'
  let type = as[1]

  let controlFn = r.controls[control]
  if ( !controlFn ) ax.throw( `Report field factory does not support control type '${ control }'.` )

  let controlOptions = {
    ...options,
    name: name,
    value: value,
    type: type,
    ...options[control]
  }

  return controlFn( controlOptions )

}
