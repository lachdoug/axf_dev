ax.extension.router.controller.routes.
view = ( config ) => ( routesElement, location ) => {

  let scope = config.scope || ''
  let scopedpath = location.path.slice( scope.length )
  let component = config.default
  let match = config.match || []
  let splat = config.splat || []
  let slash
  let index

  let routesKeys = Object.keys( config.routes )

  for ( let i in routesKeys ) {

    let routesKey = routesKeys[i]

    let matched = ax.x.router.controller.routes.matcher(
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
      scope = scope + matched.scope
      index = i

      break

    }

  }

  scope = scope.replace( /\/$/, '' )

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
            if ( !anchored ) ax.log.warn( `Appkit router view cannot find #${ location.anchor }` )
            if ( anchored ) anchored.scrollIntoView()
          }
        }
      }
    )

  }

  if ( ax.is.undefined(  component ) ) {
    ax.log.warn( 'Not found:', location )
  }

  return {
    component: component,
    scope: scope
  }

}
