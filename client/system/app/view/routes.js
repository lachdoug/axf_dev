app.view.routes = ( controller ) => controller.routes( {
  '/login': app.view.login,
  '/logout': app.view.logout,
  '/timeout': app.view.timeout,
  '/disconnected': app.view.disconnected,
  '/reconnect': app.view.reconnect,
  '/restarting': app.view.restarting,
  '/updating/os': app.view.updating.os,
  '/updating': app.view.updating,
  '/applications/?*': app.application,
  '/services/?*': app.service,
  '/system*': app.system,
}, {
  home: '/system',
  lazy: true,
  // transition: [ 'crossfade', null, { time: 10000 } ],
} )
