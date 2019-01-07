ax.extension.appkit.form.factory.field.
dependent.process = function( options ) {

  let x = ax.x
  let lib = x.appkit.lib.animate
  if ( this.$match() ) {
    if ( options.onmatch ? options.onmatch( this ) : true ) {
      lib.fade.in( this )
// DEV
if ( !this.$('appkit-form-field-input > *').$enable ) debugger
      this.$('appkit-form-field-input > *').$enable()
    }
  } else {
    if ( options.onmismatch ? options.onmismatch( this ) : true ) {

      lib.fade.out( this )
      this.$('appkit-form-field-input > *').$disable()
    }
  }

}
