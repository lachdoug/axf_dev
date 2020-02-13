app.repo.reset = ( parent, path ) => controller => (a,x) => [

  a.h5( 'Reset repo' ),
  a.p( [

    app.button( {
      label: app.icon( 'fa fa-times', 'Cancel' ),
      class: 'btn btn-secondary',
      title: 'Cancel',
      onclick: (e,el) => {
        controller.open('..')
      },
    } ),
    ' ',
    app.button( {
      label: app.icon( 'fas fa-undo', 'Reset' ),
      class: 'btn btn-danger',
      title: 'Reset repo',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/${ path }/repo/reset`,
          ( response, el ) => {
            el.$nodes = [
              a.p( 'Repo has been reset.' ),
              a['div.clearfix']( [
                app.button( {
                  label: app.icon( 'fa fa-check', 'OK' ),
                  onclick: (e,el) => {
                    controller.open( '..' )
                  },
                  title: 'Return to repo',
                } ),
              ] ),
            ]
          },
          {
            method: 'POST',
            placeholder: a.p(
              app.icon( 'fa fa-spinner fa-spin', 'Resetting repo' )
            )
          }
        )

      },
    } ),

  ] )

]



//
//  app.http(
//   `/~/${ path }/repo`,
//   ( response, el ) => {
//     let repo = response.json()
//
//     // up.$set()
//
//     el.$nodes = [
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
//           app.button( {
//             label: app.icon( 'fas fa-undo', 'Reset' ),
//             title: 'Reset',
//             onclick: (e,el) => {
//               controller.open( 'reset' )
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
//       repo.diff ? a.p( app.form( {
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
//       repo.diff ? app.collapse( {
//         label: 'Diff',
//         body: a.pre( repo.diff, { class: 'border border-light p-2' } ),
//       } ) : null,
//     ]
//
//   },
//   {
//     placeholder: a.p(
//       app.icon( 'fa fa-spinner fa-spin', `Loading ${ parent } repo` )
//     )
//   }
// )
