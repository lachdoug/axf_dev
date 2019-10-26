ax.extension.report = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let shims = [ this.report.shim(), ...( options.shims || [] ) ]

  let f = this.report.factory( {
    shims: shims,
    scope: options.scope,
    params: options.params,
    object: options.object,
  } )

  return f.report( {
    report: options.report,
    url: options.url,
    reportTag: options.reportTag,
  } )

}
