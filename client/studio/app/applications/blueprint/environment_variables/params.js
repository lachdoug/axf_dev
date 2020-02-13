// app.applications.blueprint.environment_variables.params = blueprint => controller => (a,x) => {
//
//   let environment_variable = blueprint.environment_variables.find( controller.params.environment_variable_id )
//
//   return [
//
//     a.h5( `Schedule ${ environment_variable.id + 1 } params` ),
//     a.hr,
//
//     app.blueprintForm(
//       controller,
//       blueprint,
//       environment_variable.params,
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
