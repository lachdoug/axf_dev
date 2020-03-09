app.namespaces.workspace.definitions.delete = controller => (a,x) => [

  a.p( 'Delete definition?' ),
  a.p( [

    app.button( {
      label: app.icon( 'fa fa-times', 'Cancel' ),
      class: 'btn btn-secondary',
      title: 'Cancel',
      onclick: (e,el) => {
        controller.open( '..', controller.query )
      },
    } ),
    ' ',
    app.button( {
      label: app.icon( 'fa fa-trash', 'Delete' ),
      class: 'btn btn-danger',
      title: 'Delete service definition',
      // confirm: 'Are you sure that you want to delete this namespace?',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/namespaces/${ controller.params.namespace_id }/workspace/definitions/query`,
          ( namespace, el ) => el.$nodes = [
            a.p( 'Service definition has been deleted.' ),
            a['div.clearfix']( [
              app.button( {
                label: app.icon( 'fa fa-check', 'OK' ),
                onclick: (e,el) => {
                  controller.open( '../..' )
                },
                title: 'Return to service definitions',
              } ),
            ] ),
          ],
          {
            method: 'DELETE',
            query: controller.query,
            placeholder: a.p(
              app.hourglass( 'Deleting definition' )
            )
          }
        )

      },
    } ),

  ] )

]
