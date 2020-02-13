app.system.services = ( controller ) => (a,x) => [
  // a.h3( 'Application' ),

  controller.routes( {
    '/?': 'app.system.services.index',
    '/:name': app.system.services.show,
    '/:name/installation': app.system.services.installation,
  }, {
    lazy: true,
  } )

]
