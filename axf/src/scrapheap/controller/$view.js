// ax.extension.appkit.controller.$view = function ( options ) {
//
//   return function ( locator ) {
//     let content = this.$content( this, locator )
//     if ( options.transition ) {
//       this.children[0].$to( content )
//     } else {
//       this.$nodes = content
//     }
//   }
//
// }

ax.extension.appkit.controller.$view = function ( routes, options ) {

  let views = ax.x.appkit.controller.$view.views( routes, options )


  return function( controller, locator ) {
    let route = locator.route // || options.root || '/'
    let variables = {}

    // debugger
    let content
    for ( let i in views ) {
      let view = views[i]
      let pathRegex = new RegExp( view[0] )

      let match = route.match( pathRegex )
      // debugger

      if ( match ) {
        let variableNames = view[1]
        content = view[2]
        variableNames.forEach( function( variableName, i ) {
          variables[variableName] = match[ i + 1 ]
        } )
        // debugger
        break
      }
    }

    return {
      variables: variables,
      content: content
    }

  }

}
