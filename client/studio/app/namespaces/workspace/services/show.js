app.namespaces.workspace.services.show = controller => (a,x) => [

  app.http(
    [
      `/~/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/readme`,
      `/~/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/diff`,
    ],
    ( [ readme, diff ], el ) => el.$nodes = [

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          diff.uncommitted ?
          app.button( {
            label: a['.text-info']( app.icon( 'fas fa-exclamation-triangle', 'Uncommitted changes' ) ),
            title: 'Commit',
            onclick: (e,el) => {
              controller.open( 'commit' )
            }
          } ) : null,
          diff.unpushed ?
          app.button( {
            label: a['.text-info']( app.icon( 'fas fa-exclamation-triangle', 'Unpushed changes' ) ),
            title: 'Push',
            onclick: (e,el) => {
              controller.open( 'commit' )
            }
          } ) : null,
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
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Definition' ),
          title: 'Definition',
          onclick: (e,el) => {
            controller.open( 'definition' )
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
          // app.button( {
          //   label: app.icon( 'fas fa-clipboard-list', 'Status' ),
          //   title: 'Status',
          //   onclick: (e,el) => {
          //     controller.open( 'status' )
          //   }
          // } ),
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
          app.close( controller, 'Return to namespace services' ),
        ] ),
      ] ),

      a.p(
        readme.content ?
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
          title: 'Reset service',
        } ),
        app.button( {
          label: app.icon( 'fa fa-trash', 'Delete' ),
          class: 'btn app-btn-danger',
          onclick: (e,el) => {
            controller.open( 'delete' )
          },
          title: 'Delete service',
        } ),
      ] ) ),

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading service' )
      )
    }
  ),

]
