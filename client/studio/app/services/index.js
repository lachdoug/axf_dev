// // // app.services.index = namespace => controller => (a,x) => [
// // //
// // //
// // //   // up.$set( 'hide' ),
// // //
// // //   a['div.clearfix']( a['div.btn-group.float-right']( [
// // //     app.button( {
// // //       label: app.icon( 'fa fa-plus', 'New' ),
// // //       onclick: (e,el) => {
// // //         controller.open( 'new' )
// // //       },
// // //       title: 'New service',
// // //     } ),
// // //   ] ) ),
// // //
// // //   app.http(
// // //     `/~/${ namespace.id }/services`,
// // //     ( response, el ) => {
// // //       let services = response.json() || []
// // //
// // //       el.$nodes = services.map( service => a.p(
// // //         app.button( {
// // //           label: app.icon( 'fa fa-caret-right', service.name ),
// // //           onclick: (e,el) => {
// // //             controller.open( service.id )
// // //           },
// // //           title: service.remote,
// // //         } ),
// // //       ) )
// // //
// // //     },
// // //     {
// // //       placeholder: a.p(
// // //         app.icon( 'fa fa-spinner fa-spin', 'Loading services' )
// // //       )
// // //     }
// // //   )
// // //
// // // ]
// //
// // app.services.index = controller => (a,x) => [
// //
// //   a['div.clearfix']( a['div.btn-group.float-right']( [
// //     app.button( {
// //       label: app.icon( 'fa fa-plus', 'New service' ),
// //       onclick: (e,el) => {
// //         controller.open( 'new' )
// //       },
// //       title: 'New service',
// //     } ),
// //     app.up( controller, 'Return to namespace' ),
// //   ] ) ),
// //
// //   app.http(
// //     `/~/namespaces/${ controller.params.namespace_id }/services`,
// //     ( response, el ) => {
// //       let services = response.json()
// //
// //       el.$nodes = [
// //         services.length == 0 ? 'None' : null,
// //         services.map( service => a.p( [
// //           app.button( {
// //             label: app.icon( 'fa fa-caret-right', service.name ),
// //             onclick: (e,el) => {
// //               controller.open( service.id )
// //             },
// //             title: service.remote,
// //           } ),
// //         ] ) )
// //       ]
// //
// //     },
// //     {
// //       placeholder: a.p(
// //         app.icon( 'fa fa-spinner fa-spin', 'Loading namespace services' )
// //       )
// //     }
// //   )
// //
// // ]
//
// app.services.index = controller => (a,x) => [
//
//   a['div.clearfix']( a['div.btn-group.float-right']( [
//     app.button( {
//       label: app.icon( 'fa fa-plus', 'New service' ),
//       onclick: (e,el) => {
//         controller.open( 'new' )
//       },
//       title: 'New service',
//     } ),
//   ] ) ),
//
//   app.http(
//     `/~/namespaces/${ controller.params.namespace_id }/services`,
//     ( response, el ) => {
//       response.json().then( services => {
//
//         el.$nodes = [
//           services.length == 0 ? 'None' : null,
//           services.map( service => a.p( [
//             app.button( {
//               label: app.icon( 'fa fa-caret-right', service.name ),
//               onclick: (e,el) => {
//                 controller.open( service.id )
//               },
//               title: service.remote,
//             } ),
//           ] ) )
//         ]
//
//       } )
//
//     },
//     {
//       placeholder: a.p(
//         app.icon( 'fa fa-spinner fa-spin', 'Loading services' )
//       )
//     }
//   ),
//
// ]
