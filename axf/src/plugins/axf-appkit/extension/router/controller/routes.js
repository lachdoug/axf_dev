ax.extension.router.controller.
routes = ( config, startLocation ) => function( routes, options={} ) {

  let a = ax.a
  let x = ax.x

  config = { ...config }

  config.default = options.default || config.default
  config.routes = routes

  let init
  let component
  let matched
  let transition = ax.x.router.controller.routes.transition( options.transition )
  let view = ax.x.router.controller.routes.view( config )

  if ( transition ) {
    init = function() {
      let locatedView = view( this, startLocation )
      this.$matched = locatedView.matched
      this.$scope = locatedView.scope
      this.$('|appkit-transition').$to( locatedView.component )
    }
    component = [ transition ]
  } else {
    component = function() {
      let locatedView = view( this, startLocation )
      this.$matched = locatedView.matched
      this.$scope = locatedView.scope
      return locatedView.component
    }

  }

  let routesTag = {
    id: options.id,
    $config: config,
    $init: init,
    $nodes: component,

    $reload: function() {
      this.$matched = false
      this.$config.router[0].$go()
    },

    $load: function( path, query, anchor ) {

      let toLocation = {
        path: path,
        query: query,
        anchor: anchor
      }

      let locatedView = view( this, toLocation )

      if (
        options.lazy &&
        this.$scope == locatedView.scope &&
        locatedView.matched &&
        this.$matched
      ) {

        let location = toLocation
        let routes = x.lib.unnested( this, '|appkit-router-routes' )

        routes.forEach( (r) => {
          r.$load( location.path, location.query, location.anchor )
        } )

      } else {

        this.$scope = locatedView.scope

        if ( transition ) {
          this.$('|appkit-transition').$to( locatedView.component )
        } else {
          this.$nodes = locatedView.component
        }

        this.$matched = locatedView.matched

        // this.$send( 'appkit.router.load', { detail: toLocation }  )

      }

    },

    ...options.routesTag

  }

  return a['|appkit-router-routes'](
    null, routesTag
  )

}
