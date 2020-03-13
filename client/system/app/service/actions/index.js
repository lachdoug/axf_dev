app.service.actions.index = controller => (a,x) => {

  const name = controller.params.name

  let path = `/~/~/containers/service/${ name }/service_definition`

  return [

    a.h5( `Actions` ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
    app.http(
      path,
      ( definition, el ) => {
        let actions = Object.values( x.lib.object.dig( definition, [ 'service_actionators' ], {} ) )
        el.$nodes = [ app.container.actions.list( controller, actions ) ]
      },
      {
        placeholder: app.hourglass( 'Loading actions' )
      }

    ),

  ]


}
