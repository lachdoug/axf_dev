app.application.actions.index = controller => (a,x) => {

  const name = controller.params.name

  let path = `/~/~/containers/engine/${ name }/blueprint`

  return [

    a.h5( `Actions` ),
    a['div.clearfix']( a['div.float-right']( app.up( controller, 'Close' ) ) ),
    app.http(
      path,
      ( blueprint, el ) => {
        let actions = x.lib.object.dig( blueprint, [ 'software', 'actionators' ], [] )
        el.$nodes = [ app.container.actions.list( controller, actions ) ]
      },
      {
        placeholder: app.hourglass( 'Loading actions' )
      }

    ),

  ]


}
