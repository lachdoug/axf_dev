app.namespaces.delete = controller => (a,x) => [

  a.p( 'Delete provider?' ),
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
      title: 'Delete services provider',
      // confirm: 'Are you sure that you want to delete this namespace?',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/namespaces/${ controller.params.namespace_id }`,
          ( namespace, el ) => el.$nodes = [
            a.p( 'Namespace has been deleted.' ),
            a['div.clearfix']( [
              app.button( {
                label: app.icon( 'fa fa-check', 'OK' ),
                onclick: (e,el) => {
                  controller.open( '../..' )
                },
                title: 'Return to providers',
              } ),
            ] ),
          ],
          {
            method: 'DELETE',
            placeholder: a.p(
              app.hourglass( 'Deleting provider' )
            )
          }
        )

      },
    } ),

  ] )

]
