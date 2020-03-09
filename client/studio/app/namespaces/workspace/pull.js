app.namespaces.workspace.pull = controller => (a,x) => [

  a.p( 'Pull branch?' ),
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
      label: app.icon( 'fas fa-file-upload', 'Pull' ),
      class: 'btn btn-primary',
      title: 'Pull branch',
      // confirm: 'Are you sure that you want to delete this service?',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/namespaces/${ controller.params.namespace_id }/workspace/pull`,
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
              app.hourglass( 'Pulling branch' )
            )
          }
        )

      },
    } ),

  ] )

]
