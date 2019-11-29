ax.extension.report = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let shims = [ this.report.shim(), ...( options.shims || [] ) ]

  let r = this.report.factory( {
    shims: shims,
    scope: options.scope,
    params: options.params,
    object: options.object,
  } )

  return r.report( {
    report: options.report,
    reportTag: options.reportTag,
  } )

}
