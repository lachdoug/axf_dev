// app.services.service = (controller) => (a,x) => [
//
//   app.http(
//     `/~/namespaces/${ controller.params.namespace_id }/services/${ controller.params.service_id }/name`,
//     ( response, el ) => {
//       let service = response.json()
//       el.$nodes = [
//         a.h3( service.name ),
//       ]
//     },
//     {
//       placeholder: a.p(
//         app.icon( 'fa fa-spinner fa-spin', 'Loading service name' )
//       )
//     }
//   ),
//
//   controller.routes( {
//     '/?': app.services.service.show,
//     '/repo/?*': app.repo( 'service', `namespaces/${ controller.params.namespace_id }/services/${ controller.params.service_id }` ),
//     '/delete': app.services.service.delete,
//     '/readme': app.readme( 'service', `namespaces/${ controller.params.namespace_id }/services/${ controller.params.service_id }`),
//     '/license': app.license( 'service', `namespaces/${ controller.params.namespace_id }/services/${ controller.params.service_id }`),
//     '/blueprint': app.services.service.blueprint,
//   }, {
//     lazy: true,
//     // transition: [ 'crossfade', { time: 1000 } ],
//   } ),
//
// ]
