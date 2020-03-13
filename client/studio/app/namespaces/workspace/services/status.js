app.namespaces.workspace.services.status = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/status`,
    ( status, el ) => el.$nodes = [

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          app.close( controller, 'Return to services' ),
        ] ),
      ] ),

      a.pre( [ status ] ),

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading status' )
      )
    }
  )

]
