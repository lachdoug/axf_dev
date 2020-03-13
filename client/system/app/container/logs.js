app.container.logs = type => controller => (a,x) => {

  const name = controller.params.name

  let path = `/~/~/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ name }/logs`

  return [

    a.h5( 'Logs' ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
    a.br,
    app.http(
      path,
      ( logs, el ) => {
        el.$nodes = [
          app.xterm( { text: logs.stdout, label: a['.success']( 'Output' ) } ),
          a.br,
          app.xterm( { text: logs.stderr, label: a['.error']( 'Error' ) } ),
        ]
      },
      {
        placeholder: app.hourglass( 'Loading logs' )
      }
    ),

  ]


}
