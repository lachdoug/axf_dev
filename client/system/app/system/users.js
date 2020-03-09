app.system.users = controller => (a,x) => [

  a.h3( 'Users' ),

  controller.routes( {
    '/?': app.system.users.index,
    '/:user_uid': app.system.users.user,
    // 'site': app.system.users.site,
    // 'hostname': app.system.users.hostname,
    // 'reporting': app.system.users.reporting,
  }, {
    lazy: true,
  } )

]
