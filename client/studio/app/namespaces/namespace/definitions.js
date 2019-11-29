app.namespaces.namespace.definitions = controller => controller.routes( {
  '/?': app.namespaces.namespace.definitions.index,
  '/:id/?*': app.namespaces.namespace.definitions.definition,
  // '/edit': app.namespaces.namespace.edit,
  // '*': app.notFound
}, {
  lazy: true,
  // transition: [ 'crossfade', { time: 1000 } ],
} ),

app.namespaces.namespace.definitions.index = controller => (a,x) => [

  a['div.clearfix']( [
    a['div.btn-group.float-right']( [
      app.up( controller ),
    ] )
  ] ),
  
  a.h5( "Service definitions" ),
]
