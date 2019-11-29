ax.extension.form.field.shim.
field = function( f, options={} ) {

  let a = ax.a
  let x = ax.x

  if ( options.as == 'input/hidden' || options.type == 'hidden' ) {
    options.label = options.label || false
  }

  let fieldTagOptions = {
    ...options.fieldTag,
    style: {
      display: 'block',
      ...( options.fieldTag || {} ).style
    }
  }

  return a['|appkit-form-field']( [
    this.field.header( f, options ),
    a['|appkit-form-field-body']( [
      f.help( options ),
      f.control( options ),
      f.hint( options ),
    ], options.bodyTag ),
  ], fieldTagOptions )

}
