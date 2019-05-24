ax.extension.appkit.router.factory.routes.
component = (
  router,
  scope,
  params,
  options={} ) =>
( el, location ) => {

  let defaultView = options.default
  let scopedpath = location.scopedpath
  let query = location.query

  if ( ax.type.is.string( scopedpath ) ) {

    let matched = ax.extension.appkit.
    router.factory.routes.
    matcher( el.$views, scope, scopedpath, params )

    matched.view = matched.view || defaultView

    if ( ax.type.is.function( matched.view ) ) {

      let factory = ax.extension.appkit.router.factory( {
        router: [ ...router, el ],
        scope: matched.scope,
        params: matched.params,
        query: location.query,
        anchor: el.$anchor,
        path: scope + scopedpath,
        default: defaultView,
        // transition: options.transition,
      } )

      return matched.view( factory )

    } else {

      return matched.view

    }
  } else {

    return null

  }

}
