ax.extension.report.field.shim.
control = function( r, options={} ) {

  let a = ax.a
  let x = ax.x

  let as = ( options.as || '' ).split( '/' )
  let control = options.control || as[0] || 'string'
  let type = options.type || as[1]

  let controlFn = r.controls[control]
  if ( !controlFn ) ax.throw( `Report field factory does not support control '${ control }'.` )

  let key = options.key || ''

  options.name = options.name || ( r.scope ?
    `${ r.scope }[${ key }]` :
    key )

  let object = r.object || {}

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
