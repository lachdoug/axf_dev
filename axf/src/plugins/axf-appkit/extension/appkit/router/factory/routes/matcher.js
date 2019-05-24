ax.extension.appkit.router.factory.routes.
matcher = (
  views,
  scope,
  scopedpath,
  params={},
  options={}
) => {

  let component
  let matchedScope
  params.splat = params.splat || []

  for ( let i in views ) {
    let view = views[i]
    let pathRegex = new RegExp( view.regex )
    let match = scopedpath.match( pathRegex )

    matchedScope = scope + scopedpath

    if ( match ) {

// if ( ax.type.is.undefined( view.component ) ) debugger

      let paramNames = view.keys
      component = ax.type.is.null( view.component ) ? () => '' : view.component // set a component when view is otherwise empty, because router will show default otherwise.

      paramNames.forEach( function( paramName, i ) {

        let matched = match[ i + 1 ]

        if ( paramName === '*' ) {
          params.splat.push( matched )
        } else if ( paramName == '**' ) {
          let keep = scopedpath.length - matched.length
          matchedScope = scope + scopedpath.substring( 0, keep )
          params.splat.push( matched )
        } else if (
          paramName === '%' ||
          paramName == '%%'
        ) {
          let keep = scopedpath.length - matched.length
          matchedScope = scope + scopedpath.substring( 0, keep )
          params.splat.push( matched )
        } else {
          params[paramName] = matched
        }

      } )

      break

    }

  }

  return {
    params: params,
    view: component,
    scope: matchedScope
  }

}
