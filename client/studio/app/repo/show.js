// app.repo.show = ( parent, path ) => controller => (a,x) => app.http(
//   `/~/${ path }/repo`,
//   ( response, el ) => {
//     let repo = response.json()
//
//     // up.$set()
//
//     el.$nodes = [
//
//       a.h3( repo.owner ),
//
//       a['div.clearfix']( [
//         a['div.btn-group.float-right']( [
//           app.button( {
//             label: app.icon( 'fas fa-code-branch', 'Branch' ),
//             title: 'Branch',
//             onclick: (e,el) => {
//               controller.open( 'branch' )
//             }
//           } ),
//           app.up( controller, `Return to ${ parent }` ),
//         ] ),
//       ] ),
//
//       a.h5( repo.branch ),
//
//       a.p( a.small( repo.remote ) ),
//
//       a.pre( repo.status, { class: 'border border-light p-2' } ),
//
//       repo.status ? a.p( app.form( {
//         url: `/~/${ path }/repo/commit`,
//         form: (f) => [
//           f.input( {
//             name: 'commit[message]',
//             placeholder: 'Commit message',
//             required: 'required'
//           } ),
//           f.submit( {
//             label: app.icon( 'far fa-hand-paper', 'Push' ),
//             title: 'Log in',
//             to: app.hourglass(),
//             success: () => { controller.open() }
//           } ),
//         ],
//         formTag: { class: 'form-inline' },
//         success: ( response, el ) => {
//           controller.open( '..' )
//         },
//       } ) ) : null,
//
//       repo.status ? app.collapse( {
//         label: 'Status',
//         body: a.pre( repo.status, { class: 'border border-light p-2' } ),
//       } ) : null,
//
//       a['div.clearfix']( [
//         a['div.btn-group.float-right']( [
//           app.button( {
//             label: app.icon( 'fas fa-undo', 'Reset' ),
//             class: 'btn btn-outline-warning',
//             title: 'Reset',
//             onclick: (e,el) => {
//               controller.open( 'reset' )
//             }
//           } ),
//         ] ),
//       ] ),
//
//     ]
//
//   },
//   {
//     placeholder: a.p(
//       app.hourglass( `Loading ${ parent } repo` )
//     )
//   }
// )
