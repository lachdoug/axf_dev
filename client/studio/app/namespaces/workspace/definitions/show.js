app.namespaces.workspace.definitions.show = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/definitions/query`,
    ( definition, el ) => el.$nodes = [

      a.h5( definition.type ),

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          app.up( controller, 'Return to workspace' ),
        ] ),
      ] ),

      x.list( definition.object ),

      a.hr,

      a['div.clearfix']( a['div.btn-group.float-right'](
        app.button( {
          label: app.icon( 'fa fa-trash', 'Delete' ),
          class: 'btn btn-outline-danger app-btn',
          // confirm: 'Are you sure that you want to delete this namespace?',
          onclick: (e,el) => {
            controller.open( 'delete', controller.query )
          },
          title: 'Delete namespace',
        } ),
      ) ),

    ],
    {
      query: controller.query,
      placeholder: a.p(
        app.hourglass( 'Loading definition' )
      )
    }
  ),

]
