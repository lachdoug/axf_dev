app.namespaces.definitions = controller => controller.routes( {
  '/?': app.namespaces.definitions.index,
  '/:id/?*': app.namespaces.definitions.definition,
  // '/edit': app.namespaces.edit,
  // '*': app.notFound
}, {
  lazy: true,
  // transition: [ 'crossfade', { time: 1000 } ],
} ),

app.namespaces.definitions.index = controller => (a,x) => [

  a['div.clearfix']( [
    a['div.btn-group.float-right']( [
      app.up( controller ),
    ] )
  ] ),

  a.h5( "Service definitions" ),
]
