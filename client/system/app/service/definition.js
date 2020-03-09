app.service.definition = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h5( `Definition` ),
    a['div.clearfix']( a['div.float-right']( app.up( controller, 'Close' ) ) ),
    app.http(
      `/~/~/containers/service/${ name }/service_definition`,
      ( definition, el ) => el.$nodes = x.list( definition ),
      {
        placeholder: app.hourglass( 'Loading definition' )
      }

    ),

  ]


}
