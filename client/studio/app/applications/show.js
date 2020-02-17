app.applications.show = controller => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }/readme`,
    ( response, el ) => {
      response.json().then( readme => el.$nodes = [

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
              label: app.icon( 'fas fa-clipboard-list', 'Diffs' ),
              title: 'Diffs',
              onclick: (e,el) => {
                controller.open( 'diffs' )
              }
            } ),
            app.button( {
              label: app.icon( 'fab fa-git-alt', 'Commit' ),
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
            app.up( controller, 'Return to applications' ),

          ] ),
        ] ),

        a.p( readme.content ?
          app.md( readme.content ) :
          a['.error']( 'No readme!' ),
          { class: 'border border-light p-2' }
        ),

        a['div.clearfix']( a['div.btn-group.float-right']( [
          app.button( {
            label: app.icon( 'fa fa-undo', 'Reset' ),
            class: 'btn btn-outline-danger app-btn',
            onclick: (e,el) => {
              controller.open( 'reset' )
            },
            title: 'Reset application',
          } ),
          app.button( {
            label: app.icon( 'fa fa-trash', 'Delete' ),
            class: 'btn btn-outline-danger app-btn',
            onclick: (e,el) => {
              controller.open( 'delete' )
            },
            title: 'Delete application',
          } ),
        ]
        ) ),
      ] )

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading application' )
      )
    }
  )

]
