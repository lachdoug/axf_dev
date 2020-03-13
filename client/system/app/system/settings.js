// app.system.settings = controller => (a,x) => [
//
//   a.h3( 'System settings' ),
//
//   a['div.clearfix'](
//     a['div.float-right']( [
//       app.close( controller, 'Close' ),
//     ] )
//   ),
//
//   controller.routes( {
//     '/?': app.system.settings.show,
//     'site': app.system.settings.site,
//     'hostname': app.system.settings.hostname,
//     'reporting': app.system.settings.reporting,
//   }, {
//     lazy: true,
//   } )
//
// ]
