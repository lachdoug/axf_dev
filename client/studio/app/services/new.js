// app.services.new = (controller) => (a,x) => [
//
//   a.h5( 'New service' ),
//
//   app.form( {
//     url: `/~/namespaces/${ controller.params.namespace_id }/services`,
//     scope: 'service',
//     form: (f) => [
//       f.field( {
//         key: 'url',
//         as: 'input/url',
//         label: false,
//         required: true,
//         placeholder: 'Repo URL',
//         layout: 'vertical',
//       } ),
//       f.buttons( {
//         cancel: {
//           onclick: () => controller.open( '..' )
//         }
//       } ),
//     ],
//     success: ( response, el ) => {
//       let service = response.json()
//       controller.open( `/services/${ service.id }` )
//     }
//   } )
//
//
//   // a.h3('New service'),
//   //
//   // app.http(
//   //   `/~/namespaces/${ controller.params.namespace_id }/services`,
//   //   ( response, el ) => {
//   //     let namespaces = response.json() || []
//   //
//   //     el.$nodes = [
//   //
//   //
//   //     ]
//   //
//   //   },
//   //   {
//   //     placeholder: a.p(
//   //       app.icon( 'fa fa-spinner fa-spin', 'Loading namespaces' )
//   //     )
//   //   }
//   // )
//
//
//
//
//
// ]
