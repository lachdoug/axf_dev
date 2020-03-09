app.applications.status = controller => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }/status`,
    ( status, el ) => el.$nodes = [

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          app.up( controller, 'Return to applications' ),
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
