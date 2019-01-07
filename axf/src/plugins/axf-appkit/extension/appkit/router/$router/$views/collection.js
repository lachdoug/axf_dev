ax.extension.appkit.router.$router.$views.collection = function( router ) {

  let routes = router.$config.routes
  let views = []

  Object.keys( routes ).forEach( function( path ) {

    // Distinguish splats, so not confused with * in regex
    let pathRegex = path.replace( /\*\*/g, "%splats%" ).replace( /\*/g, "%splat%" )

    let routeVariableNames = pathRegex.match(/(:\w+|%splat%|%splats%)/g) || []
    let paramKeys = []

    routeVariableNames.forEach( function( routeVariableName ) {
      let paramKey
      let pattern
      if ( routeVariableName === "%splat%" ) {
        paramKey = "*"
        pattern = "([^\\/]*)"
      } else if ( routeVariableName === "%splats%" ) {
        paramKey = "**"
        pattern = "(.*)"
      } else {
        paramKey = routeVariableName.slice(1)
        pattern = "([^\\/]*)"
      }
      paramKeys.push( paramKey )
      pathRegex = pathRegex.replace( routeVariableName, pattern )
    } )

    pathRegex = "^" + pathRegex.replace( /\//g, "\\/" ) + "$"

    let content = routes[path]
    views.push( [ pathRegex, paramKeys, content ] )

  } )

  return views

}
