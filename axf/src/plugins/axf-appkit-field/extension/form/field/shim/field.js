ax.extension.form.field.shim.
field = function( f, options={} ) {

  let a = ax.a
  let x = ax.x

  if ( options.as == 'input/hidden' || options.type == 'hidden' ) {
    options.label = options.label || false
  }

  return a['div|appkit-form-field']( [
    this.field.header( f, options ),
    a['|appkit-form-field-body']( [
      f.help( options ),
      f.control( {
        ...options,
        // Controls don't normally need labels. Checkbox is exception.
        // Label for checkbox needs to be specified in options.checkbox.
        // options.label and options.labelTag consumed by this.field.header()
        label: undefined, 
        labelTag: undefined,
      } ),
      f.hint( options ),
    ], options.bodyTag ),
  ], options.fieldTag )

}
