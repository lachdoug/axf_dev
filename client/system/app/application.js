// app.application = (controller) =>  {
//
//   const name = controller.params.name
//
//   return (a,x) => a['app-application']( [
//
//     a.h3(`Engine/Application - ${ name }`),
//
//     app.btn( 'delete (uninstall) and keep data', (e,el) => el.nextSibling.$nodes = app.http(`/~/containers/engine/${ name }/delete/remove_data`, null, { method: 'delete' } ) ),
//     a['app-test-btn-result'](),
//     app.btn( 'delete (uninstall) and remove data', (e,el) => el.nextSibling.$nodes = app.http(`/~/containers/engine/${ name }/delete/remove_data`, null, { method: 'delete' } ) ),
//     a['app-test-btn-result'](),
//
//     a.br,
//     app.btn( 'GETs', (e,el) => el.nextSibling.$nodes = [
//       [ a.h5( `/~/containers/engine/${ name }` ), app.http( `/~/containers/engine/${ name }` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/blueprint` ), app.http( `/~/containers/engine/${ name }/blueprint` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/build_report` ), app.http( `/~/containers/engine/${ name }/build_report` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/logs` ), app.http( `/~/containers/engine/${ name }/logs` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/ps` ), app.http( `/~/containers/engine/${ name }/ps` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/state` ), app.http( `/~/containers/engine/${ name }/state` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/status` ), app.http( `/~/containers/engine/${ name }/status` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/uptime` ), app.http( `/~/containers/engine/${ name }/uptime` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/websites` ), app.http( `/~/containers/engine/${ name }/websites` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/icon_url` ), app.http( `/~/containers/engine/${ name }/icon_url` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/metrics/memory` ), app.http( `/~/containers/engine/${ name }/metrics/memory` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/metrics/network` ), app.http( `/~/containers/engine/${ name }/metrics/network` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/services/persistent/` ), app.http( `/~/containers/engine/${ name }/services/persistent/` ), a.br ],
//       [ a.h5( `/~/containers/engine/${ name }/services/non_persistent/` ), app.http( `/~/containers/engine/${ name }/services/non_persistent/` ), a.br ],
//     ] ),
//     a['app-test-btn-result'](),
//     a.br,
//
//   ] )
//
// }
