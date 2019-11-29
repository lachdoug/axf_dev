ax.extension.report.field.shim.
field = function( r, options={} ) {

  let a = ax.a
  let x = ax.x

  let fieldTagOptions = {
    ...options.fieldTag,
    style: {
      display: 'block',
      ...( options.fieldTag || {} ).style
    }
  }

  return a['|appkit-report-field']( [
    this.field.header( r, options ),
    a['|appkit-form-field-body']( [
      r.help( options ),
      r.control( options ),
      r.hint( options ),
    ], options.bodyTag ),
  ], fieldTagOptions )

}
