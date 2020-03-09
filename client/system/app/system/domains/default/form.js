// app.system.domains.default.form = ( controller, defaultDomain ) => (a,x) => app.form( {
//   url: '/~/~/system/config/default_domain',
//   success: () => controller.open( '..' ),
//   object: defaultDomain,
//   scope: 'api_vars',
//   form: (f) => [
//
//     f.field( {
//       key: 'default_domain',
//       label: false,
//       layout: 'vertical',
//       as: 'select',
//       selections: Object.keys( defaultDomain.domains ),
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
