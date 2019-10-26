ax.extension.form.field.shim = function() {

  let x = ax.x

  return {
    button: ( f, target ) => ( options={} ) => target( {
      ...options,
      buttonTag: {
        $disable: function() {
          this.disabled = 'disabled'
        },
        $enable: function() {
          this.removeAttribute( 'disabled' )
        },
        ...options.buttonTag
      },
    } ),
    field: ( f, target ) => ( options={} ) => this.shim.field( f, options ),
    fieldset: ( f, target ) => ( options={} ) => this.shim.fieldset( f, options ),
    label: ( f, target ) => ( options={} ) => this.shim.label( options ),
    help: ( f, target ) => ( options={} ) => this.shim.help( options ),
    helpbutton: ( f, target ) => ( options={} ) => this.shim.helpbutton( options ),
    hint: ( f, target ) => ( options={} ) => this.shim.hint( options ),
    control: ( f, target ) => ( options={} ) => this.shim.control( f, options ),
    controls: {
      input: ( f, target ) => ( options={} ) => this.shim.controls.input( f, options ),
      select: ( f, target ) => ( options={} ) => this.shim.controls.select( f, options ),
      textarea: ( f, target ) => ( options={} ) => this.shim.controls.textarea( f, options ),
      check: ( f, target ) => ( options={} ) => this.shim.controls.check( f, options ),
    }

  }

}
