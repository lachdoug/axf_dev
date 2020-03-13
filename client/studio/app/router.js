app.router = (a,x) => x.router( {
  routes: controller => [
    app.nav( controller ),
    controller.routes( {
      '/?': app.home,
      '/login': app.login,
      '/logout': app.logout,
      '/timeout': app.timeout,
      '/applications*': app.applications,
      '/namespaces*': app.namespaces,
      '/settings': app.settings,
    } ),
  ],
  lazy: true,
  transition: [ 'crossfade', { time: 500 } ],
  default: controller => a['p.error']( [ controller, `Not found: CLIENT ${ controller.path } in ${ controller.scope || 'root' }` ] ),
} )
