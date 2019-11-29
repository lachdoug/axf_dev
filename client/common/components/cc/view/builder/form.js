cc.view.builder.form = ( formSpec, params ) => (a,x) => {

  let scope = formSpec.scope || ''
  let keys = scope.match( /\w+/g ) || []
  let object = x.lib.object.dig( params, keys )
  let components = Object.values( formSpec.components || {} )

  return cc.view.builder.form.form( {
    url: formSpec.url,
    components: components,
    scope: scope,
    object: object,
    params: params,
  } )

}
