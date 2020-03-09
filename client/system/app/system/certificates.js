app.system.certificates = controller => (a,x) => [

  a.h3( 'System certificates' ),

  controller.routes( {
    '/?': app.system.certificates.index,
    '/default': app.system.certificates.default,
    '/add': app.system.certificates.add,
    '/remove': app.system.certificates.remove,
  }, {
    lazy: true,
  } )

]
