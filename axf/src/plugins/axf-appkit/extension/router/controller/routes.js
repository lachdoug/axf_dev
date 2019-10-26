ax.extension.router.controller.
routes = ( config, startLocation ) => function( routes, options={} ) {

  let a = ax.a

  config = { ...config }

  config.default = options.default || config.default
  config.routes = routes

  let init
  let component
  let transition = ax.x.router.controller.routes.transition( options.transition )
  let view = ax.x.router.controller.routes.view( config )

  if ( transition ) {
    init = function() {
      let locatedView = view( this, startLocation )
      this.$scope = locatedView.scope
      this.$('|appkit-transition').$to( locatedView.component )
    }
    component = [ transition ]
  } else {
    component = function() {
      let locatedView = view( this, startLocation )
      this.$scope = locatedView.scope
      return locatedView.component
    }

  }

  let routesTag = {
    id: options.id,
    $config: config,
    $init: init,
    $nodes: component,

    $open: function( path, query, anchor ) {
      ax.log( toLocation )

      if ( path[0] === '/' ) {
        config.router[0].$open( path, query, anchor )
      } else {
        path = this.$scope + ( path ? `/${ path }` : '' )
        config.router[0].$open( path, query, anchor )
      }

    },

    $load: function( path, query, anchor ) {

      let toLocation = {
        path: path,
        query: query,
        anchor: anchor
      }

      let locatedView = view( this, toLocation )

      if ( options.lazy && this.$scope === locatedView.scope ) {

        let location = toLocation
        let routes = this.$$('|appkit-router-routes').$$

        routes.forEach( (r) => {
          // Call $locate on top-level routes only.
          // Other routes will be replaced when top-level re-renders.
          if ( r.$config.router.length === this.$config.router.length + 1 ) {
            r.$load(
              location.path, location.query, location.anchor
            )
          }
        } )

      } else {

        this.$scope = locatedView.scope

        if ( transition ) {
          this.$('|appkit-transition').$to( locatedView.component )
        } else {
          this.$nodes = locatedView.component
        }

      }

    },

    ...options.routesTag

  }

  return a['|appkit-router-routes'](
    routesTag
  )

}
