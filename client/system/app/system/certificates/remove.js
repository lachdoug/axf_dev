// app.system.certificates.remove = ( controller ) => (a,x) => [
//
//   a.h5( 'Remove' ),
//
//   app.http(
//     '/~/~/system/certificates/',
//     ( response, el ) => response.json().then(
//       certificates => el.$nodes = [
//
//         app.form( {
//           // scope: 'api_vars',
//           form: (f) => [
//
//             f.field( {
//               key: 'certificate',
//               label: false,
//               layout: 'vertical',
//               as: 'select',
//               selections: Object.keys( certificates ),
//               placeholder: 'Select certificate...',
//               required: 'required',
//             } ),
//
//             f.buttons( {
//               cancel: {
//                 onclick: () => controller.open( '..' ),
//               }
//             } ),
//
//           ],
//           formTag: {
//             $init: function() {
//               this.$off( 'submit: async submit' )
//             },
//             $on: { 'submit: custom submit': (e,el) => {
//               e.preventDefault()
//               if ( el.checkValidity() ) {
//                 let certificate = el.$data().get('certificate')
//                 el.$nodes = app.http(
//                   `/~/~/system/certificates/${ certificate }`,
//                   () => controller.open( '..' ),
//                   {
//                     method: 'DELETE',
//                     placeholder: app.hourglass( `Removing certificate...` )
//                   }
//                 )
//
//               }
//             } }
//           }
//         } )
//
//       ]
//     )
//   ),
//
// ]
