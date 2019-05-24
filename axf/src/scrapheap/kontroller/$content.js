ax.extension.appkit.kontroller.$content = function ( routes, options ) {

  var views = ax.x.appkit.kontroller.$content.views( routes, options )

  return function() {
    let path = this.$state().path
    let params = this.$state.params || {}
    let content
    for ( let i in views ) {
      var view = views[i]
      var pathRegex = new RegExp( view[0] )
debugger
if ( options.scope ) {
  path = path.replace( options.scope, '' )
}
      var match = path.match( pathRegex )
      if ( match ) {
        var paramNames = view[1]
        content = view[2]
        paramNames.forEach( function( paramName, i ) {
          params[paramName] = match[ i + 1 ]
        } )
        break
      }
    }

    if ( content === undefined ) {
      if ( options.default === undefined ) {
        let message = `Not found: '${ path }' ${ options.scope ? ` (in scope '${ options.scope }')` : '' }`
        if ( options.lost === "show" ) {
          content = message
        } else if ( options.lost === "log" ) {
          ax.log( message )
          content = ''
        } else if ( options.lost === "throw" ) {
          ax.throw( message )
        } else {
          content = ''
        }
      } else {
        content = options.default
      }
    } else if ( ax.type.is.function( content ) ) {
      content = content( params, this )
    }

    let viewTag = options.viewTag

    if ( ax.type.is.function( viewTag ) ) {
      viewTag = viewTag( path, params )
    }

    return ax.a['appkit-kontroller-view']( content, viewTag )

  }

}
