// app.service.environment = controller => (a,x) => {
//
//   const name = controller.params.name
//
//   return [
//
//     a.h5( `Envrionment` ),
//     a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
//     app.http(
//       `/~/~/containers/service/${ name }`,
//       ( container, el ) => el.$nodes = app.report( {
//         object: container,
//         report: (r) => [
//           r.field( {
//             key: 'environments',
//             as: 'many',
//             label: false,
//             layout: 'vertical',
//             report: (rr) => rr.field( {
//               key: 'value',
//               label: rr.object.name,
//             } )
//           } )
//         ]
//       } ),
//       {
//         placeholder: app.hourglass( 'Loading environment' )
//       }
//
//     ),
//
//   ]
//
//
// }
