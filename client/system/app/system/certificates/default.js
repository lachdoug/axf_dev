// app.system.certificates.default = controller => (a,x) => [
//
//   a.h5( 'Default' ),
//
//   a( {
//     $init: function(el) {
//       Promise.all( [
//
//         fetch( '/~/~/system/config/default_certificate' ).
//         then( response => response.text() ),
//
//         fetch( '/~/~/system/certificates/' ).
//         then( response => response.json() ),
//
//       ] ).then( ( [
//         certificate,
//         certificates
//       ] ) => (
//         el.$nodes = app.system.certificates.default.form(
//           controller,
//           {
//             default_certificate: certificate,
//             certificates: certificates,
//           }
//         )
//      )
//     )
//
//     },
//   } ),
//
//
// ]
//
//
//
//
//
//
// // def certificates
// //   @system_api.get 'system/certificates/'
// // end
// //
// // def default_certificate
// //   @system_api.get 'system/config/default_certificate'
// // end
// //
// // def update_default_certificate( args )
// //   @system_api.post 'system/config/default_certificate', args
// // end
// //
// // def create_certificate( args )
// //   @system_api.post 'system/certificates/', args
// // end
// //
// // def certificate(certificate_name)
// //   @system_api.get "system/certificate/#{certificate_name}"
// // end
// //
// // def update_certificate(certificate_name, args)
// //   @system_api.post "system/certificate/#{certificate_name}", args
// // end
// //
// // def delete_certificate(certificate_name)
// //   @system_api.delete "system/certificates/#{certificate_name}"
// // end
