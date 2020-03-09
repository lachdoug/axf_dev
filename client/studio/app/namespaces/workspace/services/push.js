app.namespaces.workspace.services.push = controller => (a,x) => [

  a.p( 'Push commits?' ),
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
      label: app.icon( 'fas fa-file-upload', 'Push' ),
      class: 'btn btn-primary',
      title: 'Push commits',
      // confirm: 'Are you sure that you want to delete this service?',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/push`,
          ( result, el ) => el.$nodes = [
            a.pre( result.message ),
            a['div.clearfix']( [
              app.button( {
                label: app.icon( 'fa fa-check', 'OK' ),
                onclick: (e,el) => {
                  controller.open( '..' )
                },
                title: 'Return to service',
              } ),
            ] ),
          ],
          {
            method: 'POST',
            placeholder: a.p(
              app.hourglass( 'Pushing commits' )
            )
          }
        )

      },
    } ),

  ] )

]
