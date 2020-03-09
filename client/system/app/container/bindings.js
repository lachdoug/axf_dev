app.container.bindings = type => controller => (a,x) => [

  a.h5( 'Bindings' ),

  controller.routes( {
    '/?': app.container.bindings.index( type ),
    '/persistent*': app.container.bindings.persistent( type ),
    '/nonpersistent': app.container.bindings.nonpersistent( type ),
  }, {
    lazy: true,
    transition: 'crossfade'
  } )

]
