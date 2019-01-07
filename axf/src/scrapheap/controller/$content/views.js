ax.extension.appkit.controller.$view.views = function( routes, options ) {

  let views = []

  Object.keys( routes ).forEach( function( path ) {

    let routeVariableNames = path.match(/(:\w+|\*\w*)/g) || []
    let pathRegex = path
    let paramKeys = []
// debugger
    routeVariableNames.forEach( function( routeVariableName ) {
      let paramKey
      if ( routeVariableName === "*" ) {
        paramKey = "splat"
      } else if ( routeVariableName === ":" ) {
        ax.throw( "Route key needs a name." )
      } else {
        paramKey = routeVariableName.slice(1)
      }
      // debugger
// ax.log( `0: ${paramKeys}` )
      paramKeys.push( paramKey )
// ax.log( `1: ${paramKeys}` )
      let pattern = routeVariableName.charAt(0) === ":" ? "(\\w+)" : "(.*)"
      pathRegex = pathRegex.replace( routeVariableName, pattern )
    } )

    pathRegex = "^" + pathRegex.replace( /\//g, "\\/" ) + "$"

    let content = routes[path]

// ax.log( `2: ${paramKeys}` )
    views.push( [ pathRegex, paramKeys, content ] )

  } )

  // debugger

  return views

}

//
// let views = []
//
// Object.keys( routes ).forEach( function( path ) {
//
//   let routeKeys = path.match(/(:\w+|\w*\*\w*)/g) || []
//   let pathRegex = path
//   let keyNames = []
//   let pattern
//
//
//   routeKeys.forEach( function( routeKey ) {
//     debugger
//     let match = routeKey.match(/:(\w+)/)
//     if ( match ) {
//       let keyName = match[0]
//     }
//     if ( keyName ) {
//       keyNames.push( keyName )
//       pattern = "(\\w+)"
//     } else {
//       let match = routeKey.match(/.*\*(\w+)/)
//       keyName = route
//       keyNames.push( keyName )
//       pattern = "(.*)"
//     }
//     pathRegex = pathRegex.replace( routeKey, pattern )
//   } )
//
//   pathRegex = "^" + pathRegex.replace( /\//g, "\\/" ) + "$"
//
//   let content = routes[path]
//
//   views.push( [ pathRegex, keyNames, content ] )
