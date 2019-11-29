ax.extension.report.field.shim.
hint = function( options={} ) {

  let a = ax.a

  let hint = options.hint

  return hint ? a.small( a['|appkit-report-field-hint']( hint, options.hintTag ) ) : null

}
