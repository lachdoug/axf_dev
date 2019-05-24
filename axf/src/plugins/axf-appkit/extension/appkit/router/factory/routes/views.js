ax.extension.appkit.router.factory.routes.views =
function ( routes ) {

  let result = []

  Object.keys( routes ).forEach( function( path ) {

    // Distinguish splats and ends, so no double matches in regex
    let pathRegex = path.
      replace( /\*\*/g, "&&splats&&" ).
      replace( /\*/g, "&&splat&&" ).
      replace( /%%$/g, "&&stubs&&" ).
      replace( /%$/g, "&&stub&&" )

    // if ( pathRegex === "&&stub&&" ) {
    //   pathRegex = "##empty##"
    // }

    let routeVariableNames = pathRegex.match(/(:\w+|&&splat&&|&&splats&&|&&stubs&&|&&stub&&)/g) || []
    let paramKeys = []

    routeVariableNames.forEach( function( routeVariableName ) {
      let paramKey
      let pattern
      if ( routeVariableName === "&&splat&&" ) {
        paramKey = "*"
        pattern = "([^\/]*)"
      } else if ( routeVariableName === "&&splats&&" ) {
        paramKey = "**"
        pattern = "(.*)"
      } else if ( routeVariableName === "&&stub&&" ) {
        paramKey = "%"
        pattern = "(\/?)"
      } else if ( routeVariableName === "&&stubs&&" ) {
        paramKey = "%%"
        pattern = "(\/?|\/.+)"
      } else {
        paramKey = routeVariableName.slice(1)
        pattern = "([^\/]*)"
      }
      paramKeys.push( paramKey )
      pathRegex = pathRegex.replace( routeVariableName, pattern )
    } )

    pathRegex = "^" + pathRegex.replace( /\//g, "\\/" ) + "$"

    let component = routes[path]
    result.push( {
      regex: pathRegex,
      keys: paramKeys,
      component: component, 
      path: path
    } )

  } )

  return result

}
