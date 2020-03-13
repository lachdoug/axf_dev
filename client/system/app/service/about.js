app.service.about = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h5( `About` ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
    app.http(
      `/~/~/containers/service/${ name }/service_definition`,
      ( definition, el ) => {

        el.$nodes = [
          a.p( a.strong( definition.title ) ),
          a.p( definition.description ),
        ]

      },
      {
        placeholder: app.hourglass( 'Loading info' )
      }

    ),

  ]


}
