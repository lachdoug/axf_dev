app.namespaces.workspace.status = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/status`,
    ( status, el ) => el.$nodes = [

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          app.close( controller, 'Return to workspace' ),
        ] ),
      ] ),

      a.pre( status ),

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading status' )
      )
    }
  )

]
