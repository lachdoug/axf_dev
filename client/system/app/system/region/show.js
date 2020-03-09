// app.system.region.show = controller => (a,x) => [
//
//   app.http(
//     '/~/~/system/control/base_os/locale',
//     ( response, el ) => response.json().then( locale =>
//
//       el.$nodes = app.report( {
//         object: {
//           ...locale,
//           thing: '1',
//         },
//         report: (r) => [
//           r.field( { key: 'lang_code', label: 'Language', as: 'language' } ),
//           r.field( { key: 'country_code', as: 'country' } ),
//           'h',
//           r.field( { key: 'thing', selections: { '1': 'One', '2': 'Two' } } ),
//         ],
//       } )
//
//     ),
//   ),
//
//   a.hr,
//   app.http(
//     '/~/~/system/control/base_os/timezone',
//     ( response, el ) => response.text().then( timezone =>
//
//       el.$nodes = app.report( {
//         report: (r) => [
//           r.field( { key: 'timezone', value: timezone, as: 'timezone' } ),
//         ],
//       } )
//
//     ),
//   ),
//
// ]
