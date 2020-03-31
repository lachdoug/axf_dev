ax.extension.form.field.nest.shim.nest.
factory = function( options ) {

  let x = ax.x

  let ff = x.form.factory( {
    shims: options.shims,
    scope: options.scope,
    object: options.object,
    params: options.params,
  } )

  ff.item = options.item || ''
  ff.items = ( options={} ) => this.items( ff, options )
  ff.add = ( options={} ) => this.add( ff, options )

  return ff

}
