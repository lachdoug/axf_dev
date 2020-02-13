ax.extension.router.controller.routes.
view = ( config ) => ( routesElement, location ) => {
// debugger
  let scope = config.scope || ''
  let scopedpath = location.path.slice( scope.length )
  let match = config.match || []
  let splat = config.splat || []
  let component
  let slash
  let matched

  let routesKeys = Object.keys( config.routes )

  for ( let i in routesKeys ) {

    let routesKey = routesKeys[i]

    matched = ax.x.router.controller.routes.matcher(
      routesKey,
      scopedpath,
    )

    if ( matched ) {

      component = config.routes[routesKey]
      splat = [
        ...splat,
        ...matched.splat,
      ]
      match = {
        ...match,
        ...matched.params,
      }
      slash = matched.slash
      scope = `${ scope }${ matched.scope }`.replace( /\/$/, '' )

      break

    // } else {
    //
    //   scope = null

    }

  }

  if (!matched) {

    component = ax.is.undefined( config.default ) ?
    `Not found '${ scopedpath }'` :
    config.default

  }
// debugger
  if ( ax.is.function( component ) ) {
    let controller = ax.x.router.controller( {
      router: [ ...config.router, routesElement ],
      scope: scope,
      match: match,
      splat: splat,
      slash: slash,
      default: config.default,
      transition: config.transition,
    } )( location )
    component = ax.a['|appkit-router-view'](
      component( controller ),
      {
        $init: function() {
          if ( location.anchor ) {
            let anchored = document.getElementById( location.anchor )
            if ( !anchored ) console.warn( `Appkit router view cannot find #${ location.anchor }` )
            if ( anchored ) anchored.scrollIntoView()
          }
        }
      }
    )

  }

  return {
    matched: !!matched,
    component: component,
    scope: scope,
  }

}
