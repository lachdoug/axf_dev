ax.extension.form.field.nest.shim.nest.
factory = function( options ) {

  let x = ax.x

// console.log( options.scope, options.object )
// if ( options.scope == 'view[1][form][components][2][fieldset][body]' ) debugger;


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
