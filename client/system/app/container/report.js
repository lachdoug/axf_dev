app.container.report = type => controller => (a,x) => {

  const name = controller.params.name

  let path = `/~/~/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ name }`

  return [

    a.h5( `Container` ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
    app.http(
      path,
      ( container, el ) => el.$nodes = x.output( container ),
      {
        placeholder: app.hourglass( 'Loading container' )
      }

    ),

  ]


}
