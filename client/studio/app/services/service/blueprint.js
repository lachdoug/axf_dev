// app.services.service.blueprint = controller => (a,x) => [
//
//   app.http(
//     `/~/namespaces/${ controller.params.namespace_id }/services/${ controller.params.service_id }/blueprint`,
//     ( response, el ) => {
//       let blueprint = response.json()
//
//       el.$nodes = [
//
//         a['div.clearfix']( [
//           a['div.btn-group.float-right']( [
//             app.up( controller, 'Return to service' ),
//           ] ),
//         ] ),
//
//         a.h5( blueprint.branch ),
//
//         a.pre( blueprint.content )
//       ]
//
//     },
//     {
//       placeholder: a.p(
//         app.icon( 'fa fa-spinner fa-spin', 'Loading service blueprint' )
//       )
//     }
//   )
//
// ]
