ax.extension.appkit.controller.$content = function ( routes, options ) {

  var views = ax.x.appkit.controller.$content.views( routes, options )

  return function() {
    let path = this.$state.path
    let params = this.$state.params || {}
    let content
    for ( let i in views ) {
      var view = views[i]
      var pathRegex = new RegExp( view[0] )
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
        content = `Not found: ${ path }`
      } else {
        content = options.default
      }
    } else if ( typeof content === "function" ) {
      content = content( params, this )
    }

    let viewTag = options.viewTag

    if ( typeof viewTag === "function" ) {
      viewTag = viewTag( path, params )
    }

    return ax.a['appkit-controller-view']( content, viewTag )

  }

}
