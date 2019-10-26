app.system.routes = ( controller ) => (a,x) => a['app-system-routes'](
  controller.routes( {
    '/shutdown': app.system.shutdown,
    '/restart': app.system.restart,
    '/application/:name': app.system.application,
    '/service/:name': app.system.service,
    '': app.system.overview,
    '*': 'Not found in system.',
  }, {
    // transition: [ 'crossfade', { time: 100 } ],

    // lazy: false
  } )
)
