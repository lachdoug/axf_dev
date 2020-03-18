app.application.blueprint = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h5( `Blueprint` ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
    app.http(
      `/~/~/containers/engine/${ name }/blueprint`,
      ( blueprint, el ) => el.$nodes = x.output( blueprint ),
      {
        placeholder: app.hourglass( 'Loading blueprint' )
      }

    ),

  ]


}
