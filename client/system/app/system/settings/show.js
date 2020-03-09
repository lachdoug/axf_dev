// app.system.settings.show = controller => (a,x) => [
//
//   a.h5( 'Default site' ),
//   app.http( '/~/~/system/config/default_site' ),
//
//
//   a.h5( 'Remote exception logging' ),
//   app.http( '/~/~/system/config/remote_exception_logging' ),
//
//   a.h5( 'Locale' ),
//   app.http(
//     '/~/~/system/control/base_os/locale',
//     ( response, el ) => response.json().then( locale =>
//
//       el.$nodes = app.report( {
//         object: locale,
//         report: (r) => [
//           locale,
//           r.output( { key: 'lang_code', as: 'language' } ),
//           r.output( { key: 'country_code' } ),
//         ],
//       } )
//
//     ),
//   ),
//
//   a.h5( 'Timezone' ),
//   app.http( '/~/~/system/control/base_os/timezone' ),
//
// ]
