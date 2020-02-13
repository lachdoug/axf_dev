cc.view.builder.report = ( reportSpec, params ) => (a,x) => {

  let scope = reportSpec.scope || ''
  let keys = scope.match( /\w+/g ) || []
  let object = x.lib.object.dig( params, keys )
  let components = Object.values( reportSpec.components || {} )

  return cc.view.builder.report.report( {
    components: components,
    scope: scope,
    object: object,
    params: params,
  } )

}
