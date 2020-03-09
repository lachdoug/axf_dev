app.routes = controller => controller.routes( {
  '/login': app.login,
  '/logout': app.logout,
  '/timeout': app.timeout,
  '/disconnected': app.disconnected,
  '/reconnect': app.reconnect,
  '/restarting': app.restarting,
  '/updating/os': app.updating.os,
  '/updating': app.updating,
  '/system*': app.system,
}, {
  home: '/system',
  lazy: true,
  // transition: [ 'crossfade', null, { time: 10000 } ],
} )
