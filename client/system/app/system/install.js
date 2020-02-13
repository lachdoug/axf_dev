app.system.install = ( controller ) => (a,x) => [
  a.h3( 'Install' ),

  controller.routes( {
    '/?': app.system.install.library,
    '/url': app.system.install.url,
    '/new': app.system.install.new,
    '/monitor': app.system.install.monitor,
    '/last': app.system.install.last,
  }, {
    lazy: true,
  } )

]
