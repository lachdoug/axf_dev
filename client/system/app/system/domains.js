app.system.domains = controller => (a,x) => [

  a.h3( 'Domains' ),

  controller.routes( {
    '/?': app.system.domains.index,
    '/default': app.system.domains.default,
    '/add': app.system.domains.add,
    '/remove': app.system.domains.remove,
  }, {
    lazy: true,
    transition: 'crossfade',
  } )

]
