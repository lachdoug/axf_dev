ax.extension.appkit.router =
( component, options={} ) =>
( a,x ) => {

  let routerTag = {
    $open: function( path, query={}, hash=null ) {
      // debugger
      query = x.appkit.lib.query.from.object( query )
      path = path + ( query ? "?" + query : '' ) + ( hash ? "#" + hash : '' )
      history.pushState( { urlPath: path },"", path )
      let event = new PopStateEvent( 'popstate', { urlPath: path } )
      dispatchEvent( event )
    },
    $init: (el) => {
      window.addEventListener( 'popstate', function( event ) {
        el.$locate()
      } )
    },
    // $state: ,
    $scope: options.scope || '',
    $nodes: (el) => {

      if ( ax.type.is.function( component ) ) {

        let factory = ax.extension.appkit.router.factory( {
          router: [ el ],
          scope: options.scope,
          path: window.location.pathname,
          query: x.appkit.lib.query.to.object(
            window.location.search.slice(1)
          ),
          anchor: window.location.hash.slice(1),
          params: options.params,
          default: options.default,
          transition: options.transition,
        } )

        component = component( factory )

      }

      return component

    },
    $locate: function() {
      this.$$("appkit-router-routes").$open(
        window.location.pathname,
        x.appkit.lib.query.to.object(
          window.location.search.slice(1)
        ),
        window.location.hash.slice(1)
      )
    },
    ...options.routerTag
  }

  return a['appkit-router']( routerTag )

}
