ax.extension.form = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let shims = [ this.form.shim(), ...( options.shims || [] ) ]

  let f = this.form.factory( {
    shims: shims,
    scope: options.scope,
    params: options.params,
    object: options.object,
  } )

  return f.form( options )

}
