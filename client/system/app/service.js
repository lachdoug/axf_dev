app.service = controller => (a,x) => [

  a.h3( controller.params.name ),

  controller.routes( {
    '/?': app.service.show,
    '/memory': app.container.memory( 'service' ),
    '/environment*': app.container.environment( 'service' ),
    '/bindings*': app.container.bindings( 'service' ),
    '/actions*': app.container.actions( 'service' ),
    '/configure*': app.service.configurations,
    '/about': app.service.about,
    '/logs': app.container.logs( 'service' ),
    '/processes': app.container.processes( 'service' ),
    '/container': app.container.report( 'service' ),
    '/export': app.service.export,
    '/import': app.service.import,
    '/definition': app.service.definition,
  }, {
    lazy: true,
    transition: 'crossfade',
  } )

]
