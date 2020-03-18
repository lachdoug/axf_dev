app.namespaces.definitions.show = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/definitions/query`,
    ( definition, el ) => el.$nodes = [

      a.h5( definition.type ),

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          app.close( controller, 'Return to provider' ),
        ] ),
      ] ),

      x.output( definition.object ),

    ],
    {
      query: controller.query,
      placeholder: a.p(
        app.hourglass( 'Loading definition' )
      )
    }
  ),

]
