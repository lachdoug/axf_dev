app.service.configurations = controller => (a,x) => [

  controller.routes( {
    '/?': app.service.configurations.index,
    '/perform': app.service.configurations.perform,
  }, {
    lazy: true,
    transition: 'crossfade'
  } )

]
