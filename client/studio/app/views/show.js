app.views.show = ( parent, path ) => controller => (a,x) => [

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.up( controller, 'Return to views' ),
  ] ) ),

  app.http(
    `/~/${ path }/views/${ controller.params.view_id }`,
    ( view, el ) => el.$nodes = [

      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),

      a.pre( [ view ] )

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading view' )
      )
    }
  )

]
