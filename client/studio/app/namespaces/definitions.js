app.namespaces.definitions = controller => controller.routes( {
  '/?': app.namespaces.definitions.index,
  '/query': app.namespaces.definitions.show,
}, {
  lazy: true,
  // transition: [ 'crossfade', { time: 1000 } ],
} ),
