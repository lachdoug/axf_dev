app.system.orphans = controller => (a,x) => [

  a.h3( 'System orphans' ),

  controller.routes( {
    '/?': app.system.orphans.show,
    // '/default': app.system.orphans.default,
    // '/add': app.system.orphans.add,
    // '/remove': app.system.orphans.remove,
  }, {
    lazy: true,
  } )

]
