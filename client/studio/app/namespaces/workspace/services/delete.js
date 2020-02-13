app.namespaces.workspace.services.delete = controller => (a,x) => [

  a.h5( 'Delete service' ),
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
      title: 'Delete service',
      // confirm: 'Are you sure that you want to delete this service?',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/namespaces/${ controller.params.namespace_id }/services/${ controller.params.service_id }`,
          ( response, el ) => {
            let service = response.json()
            el.$nodes = [
              a.p( 'Service has been deleted.' ),
              a['div.clearfix']( [
                app.button( {
                  label: app.icon( 'fa fa-check', 'OK' ),
                  onclick: (e,el) => {
                    controller.open( '../..' )
                  },
                  title: 'Return to services',
                } ),
              ] ),
            ]
          },
          {
            method: 'DELETE',
            placeholder: a.p(
              app.icon( 'fa fa-spinner fa-spin', 'Deleting service' )
            )
          }
        )

      },
    } ),

  ] )

]
