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
    app.close( controller, 'Return to workspace' ),
  ] ) ),

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/services`,
    ( services, el ) => el.$nodes = [
      services.length == 0 ? 'None' : null,
      services.map( service => a.p( [
        app.button( {
          label: app.icon( 'fa fa-caret-right', service.name ),
          onclick: (e,el) => {
            controller.open( service.id )
          },
          title: service.remote,
        } ),
      ] ) )
    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading services' )
      )
    }
  ),

]
