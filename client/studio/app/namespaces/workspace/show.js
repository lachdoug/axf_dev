app.namespaces.workspace.show = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace`,
    ( workspace, el ) => {

      if ( workspace.exists ) {

        el.$nodes = [

          a.h5( [
            'Workspace',
            a.small( [
              ' on branch ',
              a.strong( workspace.branch, {
                id: 'workspaceBranch'
              } )
            ] ),
          ] ),

          app.http(
            `/~/namespaces/${ controller.params.namespace_id }/workspace/readme`,
            ( readme, el ) => el.$nodes = [

              a['div.clearfix']( [
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
                app.button( {
                  label: app.icon( 'fa fa-caret-right', 'Definitions' ),
                  title: 'Definitions',
                  onclick: (e,el) => {
                    controller.open( 'definitions' )
                  }
                } ),
                app.button( {
                  label: app.icon( 'fa fa-caret-right', 'Services' ),
                  title: 'Services',
                  onclick: (e,el) => {
                    controller.open( 'services' )
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

                  app.close( controller, 'Return to namespace' ),

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
                  title: 'Delete workspace',
                } ),
              ] ) ),

            ],
            {
              placeholder: a.p(
                app.hourglass( 'Loading workspace' )
              )
            }
          ),

        ]

      } else {

        controller.open( 'new' )

      }
    },
    {
      placeholder: a.p(
        app.hourglass( 'Loading workspace' )
      )
    }
  )

]
