ax.extension.router.controller = ( config ) => ( location ) => {

    config = { ...config }

    config.scope = config.scope || ''
    config.match = config.match  || {}
    config.splat = config.splat || []
    config.slash = config.slash || ''

    return {
      href: location.href,
      path: location.path,
      query: location.query,
      anchor: location.anchor,
      scope: config.scope,
      match: config.match ,
      splat: config.splat,
      slash: config.slash,
      params: {
        ...config.match,
        ...location.query,
      },
      routes: ax.x.router.controller.routes( config, location ),
      load: ax.x.router.controller.load( config ),
      open: ax.x.router.controller.open( config ),
      // reopen: ax.x.router.controller.reopen( config ),
    }

}
