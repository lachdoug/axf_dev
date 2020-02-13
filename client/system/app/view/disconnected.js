app.view.disconnected = ( controller ) => (a,x) => a['app-disconnected'](
  [
    a.h3( "Disconnected" ),
    app.btn(
      app.icon( "fas fa-sync-alt", "Reconnect" ),
      () => controller.load( '/reconnect' )
    )
  ]

)
