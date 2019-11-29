app.namespaces.namespace.delete = (controller) => (a,x) => [

  a.h5( 'Delete namespace' ),
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
      title: 'Delete namespace',
      // confirm: 'Are you sure that you want to delete this namespace?',
      onclick: (e,el) => {

        el.$('^').$nodes = app.http(
          `/~/namespaces/${ controller.params.namespace_id }`,
          ( response, el ) => {
            let namespace = response.content
            el.$nodes = [
              a.p( 'Namespace has been deleted.' ),
              a['div.clearfix']( [
                app.button( {
                  label: app.icon( 'fa fa-check', 'OK' ),
                  onclick: (e,el) => {
                    controller.open( '/namespaces' )
                  },
                  title: 'Return to namespaces',
                } ),
              ] ),
            ]
          },
          {
            method: 'DELETE',
            placeholder: a.p(
              app.icon( 'fa fa-spinner fa-spin', 'Deleting namespace' )
            )
          }
        )

      },
    } ),

  ] )

]
