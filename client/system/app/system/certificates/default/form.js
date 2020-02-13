// app.system.certificates.default.form = ( controller, defaultcertificate ) => (a,x) => app.form( {
//   url: '/~/~/system/config/default_certificate',
//   success: () => controller.open( '..' ),
//   object: defaultcertificate,
//   scope: 'api_vars',
//   form: (f) => [
//
//     f.field( {
//       key: 'default_certificate',
//       label: false,
//       layout: 'vertical',
//       as: 'select',
//       selections: Object.keys( defaultcertificate.certificates ),
//       required: 'required',
//     } ),
//
//     f.buttons( {
//       cancel: {
//         onclick: () => controller.open( '..' ),
//       }
//     } ),
//
//   ]
// } )
