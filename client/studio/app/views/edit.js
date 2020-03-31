app.views.edit = ( parent, path ) => controller => (a,x) => [

  a.h5( 'Edit view' ),

  app.http(
    `/~/${ path }/views/${ controller.params.view_id }`,
    ( view, el ) => el.$nodes = [

      app.dialogue.designer(
        controller,
        `/~/${ path }/views/${ controller.params.view_id }`,
        view,
        view => controller.open( '..' )
      )

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading view' )
      )
    }
  )

]
