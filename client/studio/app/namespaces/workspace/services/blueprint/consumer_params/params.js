// app.namespaces.workspace.services.blueprint.consumer_params.params = blueprint => controller => (a,x) => {
//
//   let consumer_param = blueprint.consumer_params.find( controller.params.consumer_param_id )
//
//   return [
//
//     a.h5( `Schedule ${ consumer_param.id + 1 } params` ),
//     a.hr,
//
//     app.blueprintForm(
//       controller,
//       blueprint,
//       consumer_param.params,
//       (f) => [
//         f.field( {
//           key: 'params',
//           as: 'many',
//           layout: 'vertical',
//           label: false,
//           form: (ff) => [
//             ff.field( {
//               key: 'name',
//               as: 'input/hidden',
//             } ),
//             ff.field( {
//               key: 'value',
//               label: ff.object.name,
//             } ),
//           ]
//         } ),
//       ]
//
//     ),
//
//   ]
//
// }
