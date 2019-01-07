ax.extension.appkit.router.$to = function( options ) {

  return function ( path, params ) {

    if ( params ) {
      var queryString = ax.x.appkit.lib.objectToQueryString( params )
      if ( path.includes( "?" ) ) {
        path += "&" + queryString
      } else {
        path += "?" + queryString
      }
    }

    if ( options.bind === "window" || options.bind === window ) {
      let urlPath = options.scope + path
      // console.log(urlPath)
      history.pushState( { urlPath: urlPath },"", urlPath )
      var popStateEvent = new PopStateEvent('popstate', { urlPath: urlPath } )
      dispatchEvent(popStateEvent)
    } else {
      this.$open( path )
    }

  }

}
