app.namespaces.workspace.services.index = controller => (a,x) => [

  a.h5( 'Services' ),

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New service' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New service',
    } ),
    app.up( controller, 'Return to workspace' ),
  ] ) ),

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace`,
    ( response, el ) => {
      response.json().then( workspace => {

        if ( workspace.exists ) {

          el.$nodes = [
            workspace.services.length == 0 ? 'None' : null,
            workspace.services.map( service => a.p( [
              app.button( {
                label: app.icon( 'fa fa-caret-right', service.name ),
                onclick: (e,el) => {
                  controller.open( service.id )
                },
                title: service.remote,
              } ),
            ] ) )
          ]

        } else {

          controller.open( 'setup' )

        }

      } )

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading services' )
      )
    }
  ),

]
