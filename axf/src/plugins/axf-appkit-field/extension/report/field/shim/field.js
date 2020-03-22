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
    a['|appkit-report-field-body']( [
      r.help( options ),
      r.control( {
        ...options,
        label: '',
        labelTag: {},
      } ),
      r.hint( options ),
    ], options.bodyTag ),
  ], fieldTagOptions )

}
