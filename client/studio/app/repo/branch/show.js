// app.repo.branch.show = ( parent, path ) => controller => (a,x) => app.http(
//   `/~/${ path }/repo/branch`,
//   ( response, el ) => {
//     let branch = response.json()
//
//     el.$nodes = [
//
//       a.h3( branch.repo ),
//
//       a['div.clearfix']( [
//         a['div.btn-group.float-right']( [
//           app.button( {
//             label: app.icon( 'fas fa-asterisk', 'Set' ),
//             title: 'Set branch',
//             onclick: (e,el) => {
//               controller.open( 'set' )
//             }
//           } ),
//           app.up( controller, 'Return to repo' ),
//
//         ] ),
//       ] ),
//
//       a.pre( branch.status, { class: 'border border-light p-2' } ),
//
//       a['div.clearfix']( a['div.btn-group.float-right'](
//         app.button( {
//           label: app.icon( 'fas fa-folder-minus', 'Remove' ),
//           class: 'btn btn-outline-warning',
//           // confirm: 'Are you sure that you want to delete this application?',
//           onclick: (e,el) => {
//             controller.open( 'remove' )
//           },
//           title: 'Remove a branch',
//         } ),
//       ) ),
//
//       // a.hr,
//       // branch.all.map( branch => app.button( {
//       //   label: branch,
//       // } ) ),
//     ]
//
//   },
//   // {
//   //   placeholder: a.p(
//   //     app.hourglass( 'Loading application branch' )
//   //   )
//   // }
// )
