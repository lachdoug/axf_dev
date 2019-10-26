app.view.routes = ( controller ) => controller.routes( {
  '/login': app.view.login,
  '/logout': app.view.logout,
  '/timeout': app.view.timeout,
  '/disconnected': app.view.disconnected,
  '/restarting': app.view.restarting,
  '/updating': app.view.updating,
  '/system*': app.system,
  '/application/:name*': app.application,
  '/service/:name*': app.service,

  '*': 'Not found in root.',
}, {
  lazy: true,
  // transition: [ 'crossfade', null, { time: 10000 } ],
} )
