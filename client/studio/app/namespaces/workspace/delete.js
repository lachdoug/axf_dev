app.namespaces.workspace.delete = controller => (a,x) => [

  a.p( 'Delete workspace?' ),
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
      label: app.icon( 'fa fa-trash', 'Delete' ),
      class: 'btn btn-danger',
      title: 'Delete workspace',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/namespaces/${ controller.params.namespace_id }/workspace`,
          ( workspace, el ) => el.$nodes = [
            a.p( 'Workspace has been deleted.' ),
            a['div.clearfix']( [
              app.button( {
                label: app.icon( 'fa fa-check', 'OK' ),
                onclick: (e,el) => {
                  controller.open( '../..' )
                },
                title: 'Return to namespace',
              } ),
            ] ),
          ],
          {
            method: 'DELETE',
            placeholder: a.p(
              app.hourglass( 'Deleting workspace' )
            )
          }
        )

      },
    } ),

  ] )

]
