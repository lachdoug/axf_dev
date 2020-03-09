app.disconnected = controller => (a,x) => [
  a.h3( "Disconnected" ),
  app.btn(
    app.icon( "fas fa-sync-alt", "Reconnect" ),
    () => controller.load( '/reconnect' )
  )
]
