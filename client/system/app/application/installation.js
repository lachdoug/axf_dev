app.application.installation = controller =>  {

  const name = controller.params.name

  return (a,x) => [

    a.h5( 'Installation' ),
    a['div.clearfix']( a['div.float-right']( app.up( controller, 'Close' ) ) ),

    app.http(
      `/~/~/containers/engine/${ name }/build_report`,
      ( report, el ) => el.$nodes = a.pre( report ),
      {
        placeholder: app.hourglass( 'Loading installation' ),
      }
    ),

  ]

}
