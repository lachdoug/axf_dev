ax.extension.appkit.report.factory.field.
dependent.update = function( options ) {

  let x = ax.x
  let lib = x.appkit.lib.animate
  if ( this.$match() ) {
    if ( options.onmatch ? options.onmatch( this ) : true ) {
      lib.fade.in( this )
    }
  } else {
    if ( options.onmismatch ? options.onmismatch( this ) : true ) {
      lib.fade.out( this )
    }
  }

}
