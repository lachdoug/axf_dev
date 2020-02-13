app.system.applications = ( controller ) => (a,x) => [
  // a.h3( 'Application' ),

  controller.routes( {
    '/?': 'app.system.applications.index',
    '/:name': app.system.applications.show,
    '/:name/installation': app.system.applications.installation,
  }, {
    lazy: true,
  } )

]
