// app.system.diagnostics = controller => (a,x) => [
//
//   a.h3( 'System diagnostics' ),
//
//   a['div.clearfix'](
//     a['div.float-right']( [
//       app.close( controller, 'Close' ),
//     ] )
//   ),
//
//   app.btn(
//     app.icon( 'fas fa-book', 'Registry' ),
//     () => controller.open( 'registry' )
//   ),
//   app.btn(
//     app.icon( 'fas fa-registered', 'Reserved' ),
//     () => controller.open( 'reserved' )
//   ),
//   app.btn(
//     app.icon( 'fas fa-compass', 'Orphans' ),
//     () => controller.open( 'orphans' )
//   ),
//   app.btn(
//     app.icon( 'fas fa-bug', 'Exceptions' ),
//     () => controller.open( 'exceptions' )
//   ),
//
//   app.btn(
//     app.icon( 'fas fa-clipboard-check', 'Checkup' ),
//     (e,el) => el.nextSibling.$nodes = app.http(
//       '/~/~/containers/check_and_act',
//       ( response, el ) => response.json().then(
//         result => { el.$nodes = x.output( result ) }
//       )
//     )
//   ),
//   a['app-test-btn-result'](),
//
// ]
