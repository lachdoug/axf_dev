ax.extension.router =
( routes, options={} ) =>
( a,x ) => {

  let config = {
    scope: options.scope || '',
    default: options.default,
    home: options.home,
  }

  if ( options.home ) {
    if ( window.location.pathname.match( /^$|^\/$/ ) ) {
      window.history.replaceState( {}, 'Home', options.home )
    }
  }

  let routerTag = {

    id: options.id,

    $init: (el) => {

      const pop = function() {

        this.$go()

      }.bind( el )

      window.addEventListener( 'popstate', pop )

    },

    $nodes: function() {

      if ( ax.is.function( routes ) ) {

        let controller = x.router.controller ( {
          router: [ this ],
          ...config,
        } )( this.$location() )

        return routes( controller )

      } else {

        return routes

      }

    },

    $config: config,

    $go: function() {

      let location = this.$location()
      this.$load(
        location.path, location.query, location.anchor
      )

    },

    $open: function( path, query, anchor ) {

      if ( path[0] === '/' ) {
        this.$locate( path, query, anchor )
      } else {
        path = config.scope + ( path ? `/${ path }` : '' )
        this.$locate( path, query, anchor )
      }

      this.$send( 'appkit.router.open', { detail: {
        path: path,
        query: query,
        anchor: anchor
      } } )

    },

    $locate: function( path, query, anchor ) {
      query = x.lib.query.from.object( query )
      path = ( path || '/' ).replace( /(\/\w+\/\.\.)/g, '' )
      path = ( path || '/' ) + ( query ? '?' + query : '' ) + ( anchor ? '#' + anchor : '' )
      history.pushState( { urlPath: path },'', path )
      let event = new PopStateEvent( 'popstate', { urlPath: path } )
      dispatchEvent( event )
      // debugger
    },

    $location: function() {
      let location = window.location

      return {
        // href: `${ location.pathname }${ location.search }${ location.hash }`,
        path: location.pathname,
        query: x.lib.query.to.object(
          location.search.slice(1)
        ),
        anchor: location.hash.slice(1)
      }

    },

    $load: function( path, query, anchor ) {
      let routes = this.$$('|appkit-router-routes').$$

      routes.forEach( (r) => {
        if ( r.$config.router.length === 1 ) {
          r.$load( path, query, anchor )
        }
      } )

      this.$send( 'appkit.router.load', { detail: {
        path: path,
        query: query,
        anchor: anchor,
      } } )

    },

    ...options.routerTag

  }

  return a['|appkit-router']( routerTag )

}
