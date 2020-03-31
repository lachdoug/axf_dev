cc.dialogue.builder.report.report = ( options={} ) => (a,x) => {

  let components = (r) => ( options.components || [] ).map(
    ( componentSpec ) => cc.dialogue.builder.report.component( r, componentSpec, options.params )
  )

  return cc.report( {
    report: components,
    params: options.params,
    object: options.object,
  } )

}
