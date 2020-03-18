app.service.definition = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h5( `Definition` ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
    app.http(
      `/~/~/containers/service/${ name }/service_definition`,
      ( definition, el ) => el.$nodes = x.output( definition ),
      {
        placeholder: app.hourglass( 'Loading definition' )
      }

    ),

  ]


}
