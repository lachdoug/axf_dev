ax.extension.report.field.nest.shim.nest.items.
factory = function( options ) {

  let x = ax.x

  let index = options.index

  let f = x.report.factory( {
    shims: options.shims,
    scope: options.scope,
    object: options.object,
    params: options.params,
  } )

  f.index = index
  f.item = options.item
  f.remove = ( options={} ) => this.remove( f, options )
  f.up = ( options={} ) => this.up( f, options )
  f.down = ( options={} ) => this.down( f, options )

  return f

}
