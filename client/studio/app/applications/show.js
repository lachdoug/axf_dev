app.applications.show = controller => (a,x) => [

  app.http(
    [
      `/~/applications/${ controller.params.application_id }/readme`,
      `/~/applications/${ controller.params.application_id }/diff`,
    ],
    ( [ readme, diff ], el ) => el.$nodes = [

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          diff.uncommitted ? a['.success']( app.icon( 'fas fa-exclamation-triangle', 'Uncommitted changes.' ) ) : null,
          diff.unpushed ? a['.success']( app.icon( 'fas fa-exclamation-triangle', 'Unpushed changes.' ) ) : null,
        ] ),
      ] ),

      a['div.clearfix']( [
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Blueprint' ),
          title: 'Blueprint',
          onclick: (e,el) => {
            controller.open( 'blueprint' )
          }
        } ),
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Readme' ),
          title: 'Readme',
          onclick: (e,el) => {
            controller.open( 'readme' )
          }
        } ),
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'License' ),
          title: 'License',
          onclick: (e,el) => {
            controller.open( 'license' )
          }
        } ),
        a['div.btn-group.float-right']( [
          app.button( {
            label: app.icon( 'fab fa-git-alt', 'Branch' ),
            title: 'Branch',
            onclick: (e,el) => {
              controller.open( 'branch' )
            }
          } ),
          app.button( {
            label: app.icon( 'fas fa-clipboard-list', 'Status' ),
            title: 'Status',
            onclick: (e,el) => {
              controller.open( 'status' )
            }
          } ),
          app.button( {
            label: app.icon( 'fas fa-bookmark', 'Commit' ),
            title: 'Commit',
            onclick: (e,el) => {
              controller.open( 'commit' )
            }
          } ),
          app.button( {
            label: app.icon( 'fas fa-file-upload', 'Push' ),
            title: 'Push',
            onclick: (e,el) => {
              controller.open( 'push' )
            }
          } ),
          app.button( {
            label: app.icon( 'fas fa-file-download', 'Pull' ),
            title: 'Pull namespace',
            onclick: (e,el) => {
              controller.open( 'pull' )
            }
          } ),
          app.close( controller, 'Return to applications' ),

        ] ),
      ] ),

      a.p( readme.content ?
        app.md( readme.content ) :
        a['.error']( 'No readme!' ),
        { class: 'well' }
      ),

      a['div.clearfix']( a['div.btn-group.float-right']( [
        app.button( {
          label: app.icon( 'fa fa-undo', 'Reset' ),
          class: 'btn app-btn-danger',
          onclick: (e,el) => {
            controller.open( 'reset' )
          },
          title: 'Reset application',
        } ),
        app.button( {
          label: app.icon( 'fa fa-trash', 'Delete' ),
          class: 'btn app-btn-danger',
          onclick: (e,el) => {
            controller.open( 'delete' )
          },
          title: 'Delete application',
        } ),
      ] ) ),
    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading application' )
      )
    }
  )

]
