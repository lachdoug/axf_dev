app.namespaces.workspace.definitions.index = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/definitions`,
    ( definitions, el ) => el.$nodes = [

      a.h5( 'Service definitions' ),

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          app.up( controller, 'Return to workspace' ),
        ] ),
      ] ),

      definitions.map( definition => [
        app.button( {
          label: app.icon( 'fa fa-caret-right', definition.type ),
          onclick: (e,el) => {
            controller.open( 'query', { type: definition.type } )
          },
          title: definition.type,
        } ),
      ] ),

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading definitions' )
      )
    }
  ),

]
