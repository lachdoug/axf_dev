cc.view.builder.template = ( templateSpec, params ) => {

  let x = ax.x

  let scope = formSpec.scope || {}
  let getScope = scope.get
  let setScope = scope.set
  let keys = getScope.match( /\w+/g ) || []
  let object = x.lib.object.dig( params, keys )

  try {
    return x.md( Mustache.render( templateSpec.template, { ...params, ...object } ) )
  } catch (e) {
    return e.message
  }

}
