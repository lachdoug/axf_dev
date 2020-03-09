app.container.actions = type => controller => (a,x) => [

  controller.routes( {
    '/?': app[type].actions.index,
    '/perform': app[type].actions.perform( type ),
  }, {
    lazy: true,
    transition: 'crossfade'
  } )

]
