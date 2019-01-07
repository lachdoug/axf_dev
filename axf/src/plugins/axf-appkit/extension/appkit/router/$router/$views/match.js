ax.extension.appkit.router.$router.$views.match = function ( router ) {

  return function() {

    let locator = router.$locator
    let route = locator.route
    let views = router.$views.collection
    let variables = {}
    let splat = []
    let splats = []
// debugger
    let content
    for ( let i in views ) {
      let view = views[i]
      let pathRegex = new RegExp( view[0] )
      let matches = route.match( pathRegex )
// debugger
      if ( matches ) {
        let variableNames = view[1]
        content = view[2] || ( () => '' ) // set some content when view is otherwise empty, because router will show lost otherwise.
        variableNames.forEach( function( variableName, i ) {
          let matched = matches[ i + 1 ]
          if ( variableName === '*' ) {
            splat.push( matched )
          } else if ( variableName == '**' ) {

            splats.push( matched )
          } else {
            variables[variableName] = matched
          }
        } )
        // debugger
        break
      }
    }

    if ( variables ) {
      locator.variables = { ...locator.variables, ...variables }
    }

    if ( splat.length ) {
      locator.splat = ( locator.splat || [] ).concat( splat )
    }

    if ( splats.length ) {
      locator.splats = ( locator.splats || [] ).concat( splats )
    }

    // debugger
    return content

  }

}
