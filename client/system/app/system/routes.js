app.system.routes = ( system, controller ) => (a,x) => [
  a['div.mt-3'](
    controller.routes( {
      '/shutdown': app.system.shutdown,
      '/restart': app.system.restart,
      '/update': app.system.update,
      '/update/os': app.system.update.os,
      '/registry': app.system.registry,
      '/orphans': app.system.orphans,
      '/metrics': app.system.metrics,
      '/diagnostics': app.system.diagnostics,
      '/settings/?*': app.system.settings,
      '/domains/?*': app.system.domains,
      '/certificates/?*': app.system.certificates,
      '/install/?*': app.system.install,
      '/applications/?*': app.system.applications,
      '/services/?*': app.system.services,
      '/?': app.system.show,
      // '*': 'Not found in system.',
    }, {
      // transition: [ 'crossfade', { time: 500 } ],

      // lazy: false
    } )
  )

]
