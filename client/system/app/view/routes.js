app.view.routes = ( controller ) => controller.routes( {
  '/login': app.view.login,
  '/logout': app.view.logout,
  '/timeout': app.view.timeout,
  '/disconnected': app.view.disconnected,
  '/restarting': app.view.restarting,
  '/updating': app.view.updating,
  '/application/:name*': app.application,
  '/service/:name*': app.service,
  '/system*': app.system,
}, {
  home: '/system',
  lazy: true,
  // transition: [ 'crossfade', null, { time: 10000 } ],
} )
