// app.services = {}
//
// // // app.services = namespace => controller => controller.routes( {
// // //   '/?': app.services.index( namespace),
// // //   '/new': app.services.new( namespace),
// // //   // '/namespaces/new': app.services.namespaces.new,
// // //   // '/:id/delete': app.services.delete,
// // //   '/:id/?*': app.services.service( namespace),
// // //   // '/:id/repo*': app.services.repo.router,
// // //   // '*': "????"
// // // } )
// //
// // // app.services = controller => controller.routes( {
// // //   // '/?': app.services.index,
// // //   '/new/?': app.services.new,
// // //   '/:service_id/?*': app.services.service,
// // // }, {
// // //   lazy: true,
// // //   // transition: [ 'crossfade', { time: 1000 } ],
// // // } ),
// //
// // app.services = controller => (a,x) => [
// //
// //   a.h5( 'Services' ),
// //
// //   controller.routes( {
// //     '/?': app.services.index,
// //     // '/setup': app.services.setup,
// //     '/:service_id*': app.services.service,
// //     // '/delete': app.namespaces.delete,
// //     // '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
// //     // '/readme/?': app.readme( 'namespace', `namespaces/${ controller.params.namespace_id }`),
// //     // '/license/?': app.license( 'namespace', `namespaces/${ controller.params.namespace_id }`),
// //     // '/definitions/?*': app.namespaces.definitions,
// //     // '/*': app.services,
// //     // '*': app.notFound
// //   }, {
// //     lazy: true,
// //   } ),
// // ]
