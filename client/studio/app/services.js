// app.services = namespace => controller => controller.routes( {
//   '/?': app.services.index( namespace),
//   '/new': app.services.new( namespace),
//   // '/namespaces/new': app.services.namespaces.new,
//   // '/:id/delete': app.services.delete,
//   '/:id/?*': app.services.service( namespace),
//   // '/:id/repo*': app.services.repo.router,
//   // '*': "????"
// } )

app.services = controller => controller.routes( {
  // '/?': app.services.index,
  '/new/?': app.services.new,
  '/:service_id/?*': app.services.service,
}, {
  lazy: true,
  // transition: [ 'crossfade', { time: 1000 } ],
} ),
